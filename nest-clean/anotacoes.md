### Decorators

Os decorators nada mais é do que uma função que adiciona comportamento em algo.
pode ser aplicado numa classe como ele tá aqui ó em cima diretamente do nome da @classe ele pode ser aplicado no método como tá aqui já esse decorator get em cima desse método ele pode ser aplicado numa propriedade ele pode ser aplicado uma variável o decorator

Ou seja, os decorators são basicamente isso, funções que recebem a linha de baixo, a próxima instrução JavaScript abaixo, e modificam ela de alguma forma para que ela tenha algum comportamento diferente. Então, o que a gente pode ver é que o Nest usa desses decorators aqui dentro dos controllers, principalmente dentro dos controllers que a gente vai usar decorators, para indicar.

### Modulos
Se eu quero deixar o Prisma Service ou qualquer outro provider disponível para todo o módulo que importar o meu Database Module, eu vou usar a propriedade exports e aí eu uso Prisma Service. Ou seja, agora quando eu uso exports, todo o módulo que importar o Database Module também vai ter acesso ao Prisma Service.

### Mappers
Preciso ter mais de uma representação da classe e nesse caso é muito comum a gente precisar fazer uso de algo que a gente chama de uma forma mais genérica de mappers os mappers são classes responsáveis por converter uma entidade em um formato de uma camada para o formato de outra camada então aqui olha só eu vou criar aqui o prisma question mapper

### Presenter
Vamos utilizar de dentro da Clean Architecture, o Presenter. O Presenter justamente vai fazer o papel de formatar os dados, apresentar os dados de como eles estão vindo da camada de domínio para dentro da camada HTTP de volta, para dentro de como o front-end espera esses dados.
quando eu tenho uma listagem de uma informação ou trago um dado, um GET, o melhor aqui é a gente ter um presenter.
### Stubs
Stub, dentro do contexto de testes, é quando você cria uma classe que implementa um contrato, porém ela faz uma implementação fictícia, algo que é irreal feito só para os testes.


### Nest Interfaces
O Nest, quando ele compila o código de TypeScript para JavaScript, tudo que é apenas TypeScript, como por exemplo as interfaces dos outros repositórios, elas são eliminadas do código e aí o nest perde referência para o nome das interfaces, ele não consegue fazer a injeção de dependência, porque ele depende desse nome. Por isso que a gente mudou para classes, porque o JavaScript entende classes, então o código compilado continua tendo essas classes em si. Então, aqui, o que a gente vai fazer é ir nos outros repositórios e trocar interfaces por classes abstratas


### Rest X GraphQL
O GraphQL surgiu como resposta às limitações do REST, que, embora amplamente utilizado, apresenta dois problemas principais:
- Overfetching: ocorre quando a API retorna mais dados do que o necessário, como trazer autor e respostas de uma pergunta quando só se quer os dados da pergunta. Isso aumenta o volume de dados trafegados, o tempo de resposta e o processamento.
- Underfetching: acontece quando a API fornece dados de menos, exigindo várias requisições para compor uma única tela, como buscar separadamente os dados da pergunta, do autor e das respostas.
Por isso, ao usar REST, é importante buscar um equilíbrio entre excesso e escassez de dados retornados.

### Dicas

Toda classe que for um provider aqui no Nest precisa ter o injectable, senão o Nest não vai conseguir utilizar daquela classe, porque ele não vai conseguir fazer a injeção dessa dependência

Exemplos de passar valor:

```
const configService: ConfigService<Env> = app.get(ConfigService);
const configService = app.get(ConfigService) as ConfigService<Env>; // Força
const configService = app.get<ConfigService<Env>>(ConfigService);

```

Instalação

```
npm i -g @nestjs/cli
pnpm i eslint @rocketseat/eslint-config -D
pnpm i prisma -D
pnpm i @prisma/client
npm i @rocketseat/eslint-config -D
pnpm i bcryptjs
pnpm i @types/bcryptjs -D
pnpm i zod
pnpm i @nestjs/config
pnpm i @nestjs/passport @nestjs/jwt
pnpm i passport-jwt
pnpm i vitest unplugin-swc @swc/core @vitest/coverage-v8 -D
pnpm i vitest-tsconfig-paths -D
pnpm i dotenv -D // Apenas para configurar no setup-e2e.ts pois não esta no porjeto nest
pnpm i supertest -D
pnpm i @types/supertest -D
pnpm i @types/multer -D
pnpm i @nestjs/common@latest
pnpm i @aws-sdk/client-s3
pnpm i ioredis
```

```
nest -h
nest new nest-clean
pnpm i
http localhost:3000
pnpm prisma init
pnpm prisma migrate dev // create user and question
pnpm prisma generate
pnpm prisma studio
http POST http://localhost:3333/api/hello
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
base64 public_key.pem > arquivo_base64.txt
pnpm tsc --noEmit// faz type checking de typedcript
pnpm i -D @faker-js/faker
pnpm i dayjs
pnpm run test:e2e src/infra/events/on-question-best-answer-chosen.e2e-spec.ts
```

```
Pipes no nest Midlewares
```
