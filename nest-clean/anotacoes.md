### Decorators

Os decorators nada mais é do que uma função que adiciona comportamento em algo.
pode ser aplicado numa classe como ele tá aqui ó em cima diretamente do nome da @classe ele pode ser aplicado no método como tá aqui já esse decorator get em cima desse método ele pode ser aplicado numa propriedade ele pode ser aplicado uma variável o decorator

Ou seja, os decorators são basicamente isso, funções que recebem a linha de baixo, a próxima instrução JavaScript abaixo, e modificam ela de alguma forma para que ela tenha algum comportamento diferente. Então, o que a gente pode ver é que o Nest usa desses decorators aqui dentro dos controllers, principalmente dentro dos controllers que a gente vai usar decorators, para indicar.

### Modulos
Se eu quero deixar o Prisma Service ou qualquer outro provider disponível para todo o módulo que importar o meu Database Module, eu vou usar a propriedade exports e aí eu uso Prisma Service. Ou seja, agora quando eu uso exports, todo o módulo que importar o Database Module também vai ter acesso ao Prisma Service.

### Mappers
Preciso ter mais de uma representação da classe e nesse caso é muito comum a gente precisar fazer uso de algo que a gente chama de uma forma mais genérica de mappers os mappers são classes responsáveis por converter uma entidade em um formato de uma camada para o formato de outra camada então aqui olha só eu vou criar aqui o prisma question mapper

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
```

```
nest -h
nest new nest-clean
pnpm i
http localhost:3000
pnpm prisma init
pnpm prisma migrate dev // create user and question
pnpm prisma studio
http POST http://localhost:3333/api/hello
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
base64 public_key.pem > arquivo_base64.txt
pnpm tsc --noEmit// faz type checking de typedcript
pnpm i -D @faker-js/faker
pnpm i dayjs
```

```
Pipes no nest Midlewares
```
