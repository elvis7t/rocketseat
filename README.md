# Desafio 02

Desafio referente ao módulo: Criando APIs RESTfull com Node.js
Nesse desafio desenvolveremos uma API para controle de dieta diária, a Daily Diet API.

## Introdução

Faaala Dev,

Nesse desafio você reforçará de forma prática os **conceitos** que aprendemos nesse módulo.

Como se trata de um desafio, ele necessita de alguns conhecimentos além dos abordados nesse módulo, então é importante ter autonomia para conseguir pesquisar essas coisas caso não saiba como resolver. Por isso, lembre-se, t**enha calma** e **acredite no seu processo.**

O aprendizado daqui é muito importante e com certeza você conseguirá sair com muito conhecimento bacana 💜

## Sobre o desafio
Nesse desafio desenvolveremos uma API para controle de dieta diária, a Daily Diet API.
### Regras da aplicação

- [X]  Deve ser possível criar um usuário
- [X]  Deve ser possível identificar o usuário entre as requisições
- [X]  Deve ser possível registrar uma refeição feita, com as seguintes informações:
    
    *As refeições devem ser relacionadas a um usuário.*
    
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
    
- [X] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- [X] Deve ser possível apagar uma refeição
- [X] Deve ser possível listar todas as refeições de um usuário
- [X] Deve ser possível visualizar uma única refeição
- [x] Deve ser possível recuperar as métricas de um usuário
    - [X] Quantidade total de refeições registradas
    - [X] Quantidade total de refeições dentro da dieta
    - [X] Quantidade total de refeições fora da dieta
    - [X] Melhor sequência de refeições dentro da dieta
- [x]  O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

# 🚀 Guia de Execução do Projeto

Este guia fornece instruções para configurar, executar e testar o projeto **Daily Diet API**.

## ✔️ Pré-requisitos

Certifique-se de que os seguintes itens estão instalados e configurados no seu ambiente:

- **Node.js** (versão 22 ou superior)
- **Git** (qualquer versão recente)

## 📦 Configuração do Ambiente

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   - Copie o arquivo `.env.exemple` para `.env`:
     ```bash
     cp .env.exemple .env
     ```
   - Ajuste os valores no arquivo `.env` conforme necessário.

4. **Execute as migrações do banco de dados**:
   ```bash
   npm run knex migrate:latest
   ```

5. **(Opcional) Execute os seeds do banco de dados**:
   ```bash
   npm run knex seed:run
   ```

## ▶️ Executando a Aplicação

Para iniciar o servidor, execute:
```bash
npm run dev
```

A API estará disponível no endereço: `http://localhost:<PORTA>` (a porta padrão é `3000`, mas pode ser configurada no arquivo `.env`).

Certifique-se de que o arquivo CSV está no formato esperado pela aplicação.

## 🧪 Testes

### Testes Unitários e de Integração

Para executar os testes, utilize:
```bash
npm test
```

### Observações sobre os testes:
- Certifique-se de que o ambiente de teste está configurado corretamente no arquivo `.env.test`.
- O banco de dados de teste será resetado antes de cada execução de teste.

## 🛠️ Build para Produção

Para compilar o projeto para produção, execute:
```bash
npm run build
```

Os arquivos compilados estarão disponíveis na pasta `build`.

## 🌐 Endpoints da API

A documentação completa dos endpoints da API pode ser encontrada no arquivo `routes` ou em uma ferramenta de documentação como Postman ou Swagger (se configurada).

## 🛡️ Boas Práticas

- Sempre utilize um ambiente isolado para desenvolvimento e produção.
- Não compartilhe o arquivo `.env` publicamente.
- Utilize ferramentas como `eslint` para manter a qualidade do código:
  ```bash
  npm run lint
  ```

Feito com 💜 por [Elvis Leite](https://gist.github.com/elvis7t) 😊