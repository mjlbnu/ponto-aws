'use strict';
const axios = require('axios');

const BASE_URL = 'https://api.mockytonk.com/proxy/ab2198a3-cafd-49d5-8ace-baac64e72222' 

module.exports.dequeue = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
    const ponto = JSON.parse(event.Records[0].body);
    if (ponto.includedAt && ponto.includedAt.length) {
      const response = await axios.get(`${BASE_URL}?includedAt=${ponto.includedAt}&employeeId=${ponto.employeeId}&employerId=${ponto.employerId}`);
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
