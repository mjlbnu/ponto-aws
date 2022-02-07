# Desafio Software Engineering – Marcação de Ponto

Levando em consideração um sistema de marcação de ponto em uma plataforma cloud, utilizado diariamente pelos colaboradores de diversas empresas, o problema proposto foi a modelagem de uma aplicação capaz de receber uma grande quantidade de requisições (marcações de ponto) em um curto intervalo de tempo e integrá-las em um sistema legado que possui um tempo de resposta relativamente alto.

A solução proposta é uma aplicação serverless utilizando os serviços da AWS, as principais vantagens na utilização desse tipo de serviço são: alta disponibilidade, escalabilidade automática e redução de custos.

# Instruções para deploy

Configure os parâmetros de VPC com as informações presentes em sua conta da AWS:

      vpc:
        vpcName: 'XXX'
        subnetNames:
          - 'XXX'
        securityGroupNames:
          - 'XXX'

Execute o comando de deployment do Serverless Framework:

    sls deploy
