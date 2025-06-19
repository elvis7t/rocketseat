#!/bin/sh

# Espera o banco estar pronto
echo "Aguardando o banco ficar disponível..."
until nc -z -v -w30 db 5432
do
  echo "Esperando pelo PostgreSQL..."
  sleep 2
done

# Rodar as migrations e gerar client
echo "Rodando migrations e gerando Prisma Client..."
npx prisma migrate deploy
npx prisma generate

# Inicia o app (troque por como você inicia o servidor, por exemplo: `node dist/server.js`)
echo "Iniciando aplicação..."
npm run prod
