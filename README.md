# Gympass API

API para gerenciamento de academias e check-ins de usuários, desenvolvida como parte do treinamento da Rocketseat.

## 🚀 Tecnologias e Ferramentas

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM para Node.js e TypeScript
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação baseada em tokens
- **Zod** - Validação de dados
- **Vitest** - Framework de testes
- **Supertest** - Testes de integração HTTP
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

## 📋 Requisitos

### Funcionais (RFs)
- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível obter o perfil de um usuário logado;
- [X] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [X] Deve ser possível o usuário obter seu histórico de check-ins;
- [X] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [X] Deve ser possível o usuário realizar check-in em uma academia;
- [X] Deve ser possível validar o check-in de um usuário;
- [X] Deve ser possível cadastrar uma academia;

### Regras de Negócio (RNs)
- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [X] O check-in só pode ser validado até 20 minutos após criado;
- [X] O check-in só deve ser validado por administradores;
- [X] A academia só pode ser cadastrada por administradores;

### Não-Funcionais (RNFs)
- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [X] O usuário deve ser identificado por um JWT;

## 🏗️ Estrutura do Projeto

```
src/
├── configs/              # Configurações da aplicação
│   └── prisma-config.ts  # Configuração do Prisma
├── controllers/          # Controladores das rotas
│   └── check-in/         # Controladores de check-in
├── lib/                  # Bibliotecas e utilitários
│   └── prisma.ts         # Cliente do Prisma
└── utils/                # Utilitários diversos
    └── test/             # Utilitários para testes
        ├── create-and-authenticate-user.ts
        └── setup-test-environment.ts
```

## 🛠️ Padrões de Projeto

- **Repository Pattern** - Separação da lógica de acesso a dados
- **Dependency Injection** - Injeção de dependências para melhor testabilidade
- **Clean Architecture** - Separação em camadas (controllers, use cases, repositories)
- **SOLID Principles** - Princípios de design de software
- **JWT Authentication** - Autenticação baseada em tokens
- **Singleton Pattern** - Padrão para garantir uma única instância do Prisma Client
- **Dependency Injection com Tsyringe** - Injeção de dependência para melhor testabilidade e manutenção

## 🚀 Como executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gympass-api.git
   cd gympass-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/gympass?schema=public"
   JWT_SECRET=sua_chave_secreta_aqui
   ```

4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

### Executando a aplicação

```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm run build
npm start

# Abrir o Prisma Studio para gerenciar o banco de dados
npx prisma studio
```

### Testes

```bash
# Executar testes com interface de usuário
npm run test:ui
```

### Gerenciamento do Banco de Dados

```bash
# Aplicar migrações
npx prisma migrate dev

# Abrir o Prisma Studio (interface visual para o banco de dados)
npx prisma studio

# Gerar cliente do Prisma
npx prisma generate
```

### Padrões e Boas Práticas Adicionais

- **Singleton Pattern**: Utilizado para garantir uma única instância do Prisma Client em toda a aplicação, evitando múltiplas conexões com o banco de dados.
- **Injeção de Dependência com Tsyringe**: Implementado para melhorar a testabilidade e manutenção do código, permitindo a fácil substituição de dependências durante os testes.
- **Variáveis de Ambiente**: Todas as configurações sensíveis são gerenciadas através de variáveis de ambiente, seguindo as melhores práticas de segurança.
- **TypeScript Strict Mode**: Projeto configurado com TypeScript em modo estrito para maior segurança de tipos.

### Estrutura de Pastas Detalhada

```
src/
├── @types/                 # Definições de tipos globais
├── configs/                # Configurações da aplicação
│   ├── auth.ts             # Configurações de autenticação
│   └── prisma-config.ts    # Configuração do Prisma
├── controllers/            # Controladores das rotas
│   ├── check-in/           # Controladores de check-in
│   └── users/              # Controladores de usuários
├── http/                   # Configurações HTTP
│   ├── app.ts              # Configuração do Fastify
│   └── routes/             # Definição das rotas
├── lib/                    # Bibliotecas e utilitários
│   └── prisma.ts           # Cliente do Prisma (Singleton)
├── repositories/           # Camada de acesso a dados
├── use-cases/              # Casos de uso da aplicação
└── utils/                  # Utilitários diversos
    ├── errors/             # Classes de erros personalizados
    └── test/               # Utilitários para testes
        ├── create-and-authenticate-user.ts
        └── setup-test-environment.ts
```

### Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm test:watch

# Gerar relatório de cobertura
npm test:coverage
```

## 🔍 Testes

A aplicação utiliza o Vitest para testes unitários e de integração. Os testes são organizados seguindo a estrutura do projeto e incluem:

- Testes de unidade para serviços e utilitários
- Testes de integração para rotas da API
- Testes de aceitação (e2e) para fluxos completos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Dê push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por Elvis
