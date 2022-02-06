'use strict';
const SQS = require('aws-sdk/clients/sqs');
const axios = require('axios');
const sqs = new SQS();

module.exports.dequeue = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
    console.log("dequeue");
    const ponto = JSON.parse(event.Records[0].body);
    console.log(ponto);
    if (ponto.includedAt && ponto.includedAt.length) {
      const response = await axios.get(`https://api.mockytonk.com/proxy/ab2198a3-cafd-49d5-8ace-baac64e72222?includedAt=${ponto.includedAt}&employeeId=${ponto.employeeId}&employerId=${ponto.employerId}`);
      const answer = `Sended to legacy API: ${response.data.message}`;
      console.log(`Answer: ${answer}`);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify("success")
      });
    } else {
      throw new Error("Undefined inputs...")
    } 
};
