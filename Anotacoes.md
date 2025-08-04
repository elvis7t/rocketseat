
# Configuração e Desenvolvimento em Node.js

## `.gitignore`
Criando arquivo `.gitignore` para Node.js:
```sh
gitignore node
npm i -D typescript
npm install typescript@4.3.5
npx tsc --init # Criação do arquivo tsconfig.json
npm install -D @types/node # TypeScript reconhece Node
npm install tsx -D # Para executar arquivos TS
npx tsc src/server.ts # Conversão de TS para JS
time node src/server.js # Medir tempo de execução
time tsx src/server.ts # Medir tempo de execução com tsx
```

## Instalação de bibliotecas e ferramentas
```sh
npm i fastify
npm i @fastify/cookie
npm i eslint
npm i eslint @rocketseat/eslint-config -D
npx eslint --init
```

## Configuração do VSCode
Arquivo: `/C:/Users/elvis/AppData/Roaming/Code/User/settings.json`
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## Banco de Dados
### Formas de conexão:
- **Drivers nativos**: Exemplo: `node-mssql2`, `node-postgres`, `node-mssql`
- **Query Builders**: Exemplo: `Knex.js`, `TypeORM`, `Prisma`
- **ORM**: Exemplo: `TypeORM`, `Sequelize`, `Prisma`

### Usando Knex
```sh
npm install knex sqlite3
npx knex init
npm knex migrate:make create_users
npm run knex -- migrate:make create_documents
npx knex migrate:latest
npx knex migrate:rollback
npx knex seed:make seed_users
npx knex seed:run
```

## TypeScript
```sh
npm install dotenv --force
npm install gitignore -g
gitignore node
```

## Validação com Zod
```sh
npm i zod --force
```

## Arquivo `.d.ts`
A pasta `@types` é usada para criar interfaces de bibliotecas que não possuem tipos, com arquivos `.d.ts`.

## Testes
Tipos de testes:
- Unitário
- Integração
- E2E

### Bibliotecas
```sh
npm i vitest -D 
npm i supertest -D 
npm i @types/supertest -D --force
npm install -D vitest@3.2.3

npm i vitest vite-tsconfig-paths -D
npm i vitest/coverage-v8
npm i -D @vitest/ui
```

### Macetes
- `it.skip` pula o teste
- `it.todo` marca o teste como pendente
- `it.only` executa apenas o teste marcado
- `Interface gráfica` Para visualizar os testes em uma interface gráfica:
- `ctr + a` Roda todos os testes novamente
### Boas práticas


Evitar dependência entre testes. Testes E2E devem ser isolados.

InMemoryDatabase
Um banco de dados que armazena os dados em memória, mas também utiliza o disco para armazenar os dados permanentemente.


## Compilar e Build
```sh
npm i tsup -D
node build/server.js
```

## Deploy
- render.com
- fly.io
- railway.com

---

### **Prisma ORM**
#### **Instalação e configuração**
```sh
npm i prisma -D
npx prisma init
npm i @prisma/client
npx prisma generate
```

#### **Migração do banco de dados**
```sh
npx prisma migrate dev
npx prisma migrate dev --name init
npx prisma migrate deploy
```

#### **Configuração do editor**
Adicionar no arquivo `/C:/Users/elvis/AppData/Roaming/Code/User/settings.json`:
```json
"[prisma]": {
    "editor.formatOnSave": "true"
}
```

#### **Gerenciamento do banco de dados**
```sh
npx prisma studio
docker exec -it app_container sh
npx prisma studio
docker exec -it app_container npx prisma studio
```
---

### **Prisma - Migração e Listagem**
```sh
npx prisma generate
npx prisma migrate dev
npx prisma migrate deploy
npx prisma migrate reset
```
### **PostgreSQL (Docker)**
#### **PostgreSQL - Consultas no banco**
```sh
docker exec -it pg_container psql -U user -d apisolid -c "\dt"
docker exec -it pg_container psql -U user -d apisolid -c "SELECT * FROM users;"
docker exec -it pg_container psql -U user -d apisolid -c "INSERT INTO users (name, email) VALUES ('Elvis', 'elvis@example.com');"
npx prisma migrate dev --name add_autoincrement
```


#### **Acessar containers e banco de dados**
```sh
docker exec -it pg_container psql -U user -h db -d apisolid
docker exec -it app_container psql -U user -h db -d apisolid
```

#### **Testar conexão dentro do container**
```sh
docker exec -it app_container psql -h pg_container -U user -d apisolid
docker exec -it app_container nc -zv pg_container 5432
```

#### **Ações no PostgreSQL**
```sh
docker exec -it pg_container psql -U postgres
psql -U postgres -d apisolid
psql -U postgres -h localhost -d apisolid
docker exec -it pg_container service postgresql status
docker exec -it pg_container service postgresql start
docker exec -it pg_container pg_createcluster 17 main --start
docker exec -it pg_container bash
```

#### **Operações de banco de dados**
```sh
docker exec -it app_container psql -U user -h db -d apisolid
ping pg_container
```
#### **Gerenciar logs e serviços**
```sh
docker compose logs -f db
docker exec -it pg_container psql -U user -d apisolid -c "SELECT * FROM users;"
docker-compose up --build
```
## **Instalação e Uso do Bcrypt com TypeScript**

### 🔧 Instalação
Instale o `bcryptjs` e seus tipos:
```sh
npm install bcryptjs
npm install -D @types/bcrypt
```
## **InMemoryDatabase**

#### **Definição**
Um banco de dados que armazena os dados em memória, mas também utiliza o disco para armazenar os dados permanentemente.

#### **Vantagens**
- **Velocidade**: Operações em memória são mais rápidas do que no disco.
- **Persistência**: Apesar de ser um banco em memória, os dados podem ser armazenados no disco para garantir que não sejam perdidos após reinicializações.

#### **Casos de Uso**
- **Testes e Desenvolvimento**: Ideal para ambientes onde a persistência completa não é necessária.
- **Cache**: Pode ser usado como cache para melhorar o desempenho de aplicações.
- **Aplicações Temporárias**: Sistemas que precisam de alta velocidade e não exigem armazenamento de longo prazo.

#### **Exemplos de Ferramentas**
- Redis
- SQLite (modo in-memory)

# DaysJs
```sh
 npm i dayjs
```

# JWT
```sh
  npm i @fastify/jwt 
```
