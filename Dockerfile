# Imagem base
FROM node:22.14.0-alpine

# Diretório de trabalho no container
WORKDIR /home/node/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
