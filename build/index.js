"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/app.ts
var import_reflect_metadata = require("reflect-metadata");
var import_tsyringe14 = require("tsyringe");

// src/container.ts
var import_tsyringe13 = require("tsyringe");

// src/configs/fastify.config.ts
var import_cors = __toESM(require("@fastify/cors"));
var import_fastify = __toESM(require("fastify"));
var import_tsyringe = require("tsyringe");
var import_cookie = __toESM(require("@fastify/cookie"));
var FastifyConfig = class {
  constructor(env2) {
    this.env = env2;
    this.env = env2;
  }
  app() {
    const app2 = (0, import_fastify.default)();
    app2.register(import_cors.default, {
      origin: this.env.CORS_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"]
    });
    app2.setSerializerCompiler((response) => {
      return (data) => {
        const { error } = response.schema.safeParse(data);
        if (error) {
          console.log("Response validation error", {
            response,
            error,
            data
          });
        }
        return JSON.stringify(data);
      };
    });
    app2.register(import_cookie.default);
    return app2;
  }
};
FastifyConfig = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("EnvConfig"))
], FastifyConfig);

// src/configs/env.config.ts
var import_dotenv = require("dotenv");
var import_path = require("path");
var import_zod = require("zod");
var import_tsyringe2 = require("tsyringe");
if (process.env.NODE_ENV === "test") {
  (0, import_dotenv.config)({ path: (0, import_path.resolve)(process.cwd(), ".env.test") });
} else {
  (0, import_dotenv.config)({ path: (0, import_path.resolve)(process.cwd(), ".env") });
}
var EnvConfig = class {
  NODE_ENV;
  API_PORT;
  CORS_ORIGIN;
  DATABASE_CLIENT;
  DATABASE_URL;
  constructor() {
    const configSchema = import_zod.z.object({
      NODE_ENV: import_zod.z.enum(["development", "test", "production"]).default("development"),
      API_PORT: import_zod.z.string().default("3000"),
      CORS_ORIGIN: import_zod.z.string().default("*"),
      DATABASE_CLIENT: import_zod.z.string().default("sqlite3"),
      DATABASE_URL: import_zod.z.string().default("./db/app.db")
    });
    const envVars = configSchema.safeParse(process.env);
    if (!envVars.success) {
      console.error(
        "Erro ao validar vari\xE1veis de ambiente:",
        envVars.error.format()
      );
      throw new Error("Falha ao carregar as vari\xE1veis de ambiente.");
    }
    this.NODE_ENV = envVars.data.NODE_ENV;
    this.API_PORT = parseInt(envVars.data.API_PORT, 10);
    this.CORS_ORIGIN = envVars.data.CORS_ORIGIN;
    this.DATABASE_CLIENT = envVars.data.DATABASE_CLIENT;
    this.DATABASE_URL = envVars.data.DATABASE_URL;
  }
};
EnvConfig = __decorateClass([
  (0, import_tsyringe2.injectable)()
], EnvConfig);

// src/configs/sqlite.config.ts
var import_tsyringe3 = require("tsyringe");
var import_knex = __toESM(require("knex"));
var import_path2 = require("path");
var SqliteConfig = class {
  constructor(env2) {
    this.env = env2;
    this.knexInstance = (0, import_knex.default)({
      client: this.env.DATABASE_CLIENT,
      connection: {
        filename: this.env.DATABASE_URL
      },
      useNullAsDefault: true,
      migrations: {
        extension: "ts",
        directory: (0, import_path2.resolve)(process.cwd(), "db", "migrations")
      }
    });
  }
  knexInstance;
  getConnection() {
    return this.knexInstance;
  }
};
SqliteConfig = __decorateClass([
  (0, import_tsyringe3.injectable)(),
  __decorateParam(0, (0, import_tsyringe3.inject)("EnvConfig"))
], SqliteConfig);

// src/routes/router.ts
var import_tsyringe4 = require("tsyringe");
var Router = class {
  constructor(mainRouter, userRouter) {
    this.mainRouter = mainRouter;
    this.userRouter = userRouter;
    this.mainRouter = mainRouter;
    this.userRouter = userRouter;
  }
  registerRoutes(app2, _options, done) {
    app2.register(this.mainRouter.registerRoutes.bind(this.mainRouter), {
      prefix: "/v1"
    });
    app2.register(this.userRouter.registerRoutes.bind(this.userRouter), {
      prefix: "/v1"
    });
    if (done) {
      done();
    }
    return app2;
  }
};
Router = __decorateClass([
  (0, import_tsyringe4.injectable)(),
  __decorateParam(0, (0, import_tsyringe4.inject)("MainRouter")),
  __decorateParam(1, (0, import_tsyringe4.inject)("UserRouter"))
], Router);

// src/controllers/main.controller.ts
var import_tsyringe5 = require("tsyringe");
var MainController = class {
  constructor(sqliteConfig) {
    this.sqliteConfig = sqliteConfig;
    this.sqliteConfig = sqliteConfig;
  }
  async getAll(req, reply) {
    try {
    } catch (error) {
      return reply.status(500).send({ error: error.message });
    }
  }
  async createMeal(request, replay) {
    try {
      return replay.status(201).send({});
    } catch (error) {
      return replay.status(500).send({ error: error.message });
    }
  }
  async updateMeal(request, replay) {
    try {
      return replay.status(201).send({});
    } catch (error) {
      return replay.status(500).send({ error: error.message });
    }
  }
  async deleteMeal(request, replay) {
    try {
      return replay.status(204).send();
    } catch (error) {
      return replay.status(500).send({ error: error.message });
    }
  }
  async getAllMealByUser(request, reply) {
    try {
      return reply.send({});
    } catch (error) {
      return reply.status(500).send({ error: error.message });
    }
  }
  async getMealById(request, reply) {
    try {
      return reply.send({});
    } catch (error) {
      return reply.status(500).send({ error: error.message });
    }
  }
  async getMealSumaryByUser(request, reply) {
    try {
      return reply.send({});
    } catch (error) {
      return reply.status(500).send({ error: error.message });
    }
  }
};
MainController = __decorateClass([
  (0, import_tsyringe5.injectable)(),
  __decorateParam(0, (0, import_tsyringe5.inject)("SqliteConfig"))
], MainController);

// src/controllers/user.controller.ts
var import_tsyringe6 = require("tsyringe");
var import_crypto = require("crypto");

// src/constants.ts
var import_http_status_codes = require("http-status-codes");

// src/controllers/user.controller.ts
var UserController = class {
  constructor(userRepository, userService) {
    this.userRepository = userRepository;
    this.userService = userService;
    this.userRepository = userRepository;
    this.userService = userService;
  }
  async getAllUsers(request, reply) {
    const users = await this.userService.findAll();
    reply.code(import_http_status_codes.StatusCodes.OK).send({ users });
  }
  async create(request, reply) {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      reply.code(import_http_status_codes.StatusCodes.BAD_REQUEST).send({ error: "Nome e e-mail s\xE3o obrigat\xF3rios." });
      return;
    }
    const User = {
      name,
      email,
      password
    };
    await this.userService.create(User);
    const sessionId = (0, import_crypto.randomUUID)();
    reply.setCookie("sessionId", sessionId, {
      path: "/",
      httpOnly: true,
      sameSite: true,
      maxAge: 60 * 60 * 24 * 7
      // 7 dias
    }).code(import_http_status_codes.StatusCodes.CREATED).send({ message: "Usu\xE1rio criado com sucesso." });
  }
  async profile(request, reply) {
    const sessionId = request.cookies?.sessionId;
    if (!sessionId) {
      reply.status(401).send({ error: "N\xE3o autenticado." });
      return;
    }
    const user = await this.userRepository.findById(sessionId);
    if (!user) {
      reply.status(401).send({ error: "Usu\xE1rio n\xE3o encontrado." });
      return;
    }
    reply.send({ user });
  }
};
UserController = __decorateClass([
  (0, import_tsyringe6.injectable)(),
  __decorateParam(0, (0, import_tsyringe6.inject)("UserRepository")),
  __decorateParam(1, (0, import_tsyringe6.inject)("UserService"))
], UserController);

// src/routes/main.router.ts
var import_tsyringe7 = require("tsyringe");
var MainRouter = class {
  constructor(mainController, checkSessionMiddleware, authMiddleware) {
    this.mainController = mainController;
    this.checkSessionMiddleware = checkSessionMiddleware;
    this.authMiddleware = authMiddleware;
    this.mainController = mainController;
    this.checkSessionMiddleware = checkSessionMiddleware;
    this.authMiddleware = authMiddleware;
  }
  registerRoutes(app2, _options, done) {
    app2.get(
      "/meals",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getAll(request, reply);
      }
    );
    app2.post(
      "/meal",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.createMeal(request, reply);
      }
    );
    app2.put(
      "/meal/:id",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.updateMeal(request, reply);
      }
    );
    app2.delete(
      "/meal/:id",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.deleteMeal(request, reply);
      }
    );
    app2.get(
      "/meals/user",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealSumaryByUser(request, reply);
      }
    );
    app2.get(
      "/meal/:id",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealById(request, reply);
      }
    );
    app2.get(
      "/meal/sumary",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealSumaryByUser(request, reply);
      }
    );
    app2.get(
      "/meal/ondiet",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealOnDietByUser(request, reply);
      }
    );
    app2.get(
      "/meal/offdiet",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealOffDietByUser(request, reply);
      }
    );
    app2.get(
      "/meals/longest-diet-sequence",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getLongestDietSequence(request, reply);
      }
    );
    if (done) {
      done();
    }
    return app2;
  }
};
MainRouter = __decorateClass([
  (0, import_tsyringe7.injectable)(),
  __decorateParam(0, (0, import_tsyringe7.inject)("MainController")),
  __decorateParam(1, (0, import_tsyringe7.inject)("CheckSessionMiddleware")),
  __decorateParam(2, (0, import_tsyringe7.inject)("AuthMiddleware"))
], MainRouter);

// src/routes/user.router.ts
var import_tsyringe8 = require("tsyringe");
var UserRouter = class {
  constructor(userController, authMiddleware, checkSessionMiddleware) {
    this.userController = userController;
    this.authMiddleware = authMiddleware;
    this.checkSessionMiddleware = checkSessionMiddleware;
    this.userController = userController;
    this.authMiddleware = authMiddleware;
    this.checkSessionMiddleware = checkSessionMiddleware;
  }
  registerRoutes(app2, _options, done) {
    app2.get("/users", async (request, reply) => {
      return this.userController.getAllUsers(request, reply);
    });
    app2.post(
      "/user",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.userController.create(request, reply);
      }
    );
    app2.get("/users/profile", async (request, reply) => {
      return this.userController.profile(request, reply);
    });
    if (done) {
      done();
    }
    return app2;
  }
};
UserRouter = __decorateClass([
  (0, import_tsyringe8.injectable)(),
  __decorateParam(0, (0, import_tsyringe8.inject)("UserController")),
  __decorateParam(1, (0, import_tsyringe8.inject)("AuthMiddleware")),
  __decorateParam(2, (0, import_tsyringe8.inject)("CheckSessionMiddleware"))
], UserRouter);

// src/middlewares/auth.middleware.ts
var import_tsyringe9 = require("tsyringe");
var import_zod2 = require("zod");
var authInputSchema = import_zod2.z.object({
  sessionId: import_zod2.z.string({
    required_error: "Session ID \xE9 obrigat\xF3rio.",
    invalid_type_error: "Session ID deve ser uma string."
  }).min(1, {
    message: "Session ID n\xE3o pode ser vazio."
  }),
  emailFromHeader: import_zod2.z.string({
    required_error: "Cabe\xE7alho de autoriza\xE7\xE3o (email) \xE9 obrigat\xF3rio.",
    invalid_type_error: "Cabe\xE7alho de autoriza\xE7\xE3o (email) deve ser uma string."
  }).email({
    message: "Formato de e-mail inv\xE1lido no cabe\xE7alho de autoriza\xE7\xE3o."
  })
}).strict();
var AuthMiddleware = class {
  constructor(userService) {
    this.userService = userService;
    this.userService = userService;
  }
  async handle(request, reply) {
    const inputToValidate = {
      sessionId: request.sessionId,
      emailFromHeader: request.headers.authorization
    };
    const validationResult = authInputSchema.safeParse(inputToValidate);
    if (!validationResult.success) {
      return reply.status(401).send({
        error: "Dados de autentica\xE7\xE3o inv\xE1lidos ou ausentes.",
        issues: validationResult.error.flatten().fieldErrors
      });
    }
    const { emailFromHeader: validatedEmail } = validationResult.data;
    try {
      const user = await this.userService.findUserByEmail(validatedEmail);
      if (!user) {
        return reply.status(401).send({ error: "Usu\xE1rio n\xE3o encontrado ou n\xE3o autenticado." });
      }
      request.user = user;
    } catch (error) {
      console.error("Erro no AuthMiddleware ao buscar usu\xE1rio:", error);
      return reply.status(500).send({ error: "Erro interno do servidor ao processar autentica\xE7\xE3o." });
    }
  }
};
AuthMiddleware = __decorateClass([
  (0, import_tsyringe9.injectable)(),
  __decorateParam(0, (0, import_tsyringe9.inject)("UserService"))
], AuthMiddleware);

// src/middlewares/checksession.middleware.ts
var import_tsyringe10 = require("tsyringe");

// src/errors/http.error.ts
var HttpError = class extends Error {
  statusCode;
  details;
  constructor({ statusCode, message, details }) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
};

// src/middlewares/checksession.middleware.ts
var CheckSessionMiddleware = class {
  constructor(env2) {
    this.env = env2;
    this.env = env2;
  }
  async checkSessionIdExists(request, replay) {
    const { sessionId } = request.cookies;
    if (!sessionId) {
      throw new HttpError({
        statusCode: import_http_status_codes.StatusCodes.UNAUTHORIZED,
        message: "Unauthorized"
      });
    }
    request.sessionId = sessionId;
  }
};
CheckSessionMiddleware = __decorateClass([
  (0, import_tsyringe10.injectable)(),
  __decorateParam(0, (0, import_tsyringe10.inject)("EnvConfig"))
], CheckSessionMiddleware);

// src/repository/user.repository.ts
var import_tsyringe11 = require("tsyringe");
var import_crypto2 = require("crypto");
var UserRepository = class {
  constructor(sqliteConfig) {
    this.sqliteConfig = sqliteConfig;
    this.sqliteConfig = sqliteConfig;
  }
  async findAll() {
    const knex2 = this.sqliteConfig.getConnection();
    const users = await knex2("users").select("*");
    return users;
  }
  async create(name, email, password) {
    const user = {
      id: (0, import_crypto2.randomUUID)(),
      name,
      email,
      password,
      created_at: /* @__PURE__ */ new Date()
    };
    const knex2 = this.sqliteConfig.getConnection();
    await knex2("users").insert(user);
    return user;
  }
  async findByEmail(email) {
    const knex2 = this.sqliteConfig.getConnection();
    const user = await knex2("users").where({ email }).first();
    return user;
  }
  async findById(id) {
    const knex2 = this.sqliteConfig.getConnection();
    const user = await knex2("users").where({ id }).first();
    return user;
  }
};
UserRepository = __decorateClass([
  (0, import_tsyringe11.injectable)(),
  __decorateParam(0, (0, import_tsyringe11.inject)("SqliteConfig"))
], UserRepository);

// src/services/user.service.ts
var import_tsyringe12 = require("tsyringe");

// src/validators/userSchema.ts
var import_zod3 = require("zod");
var userSchema = import_zod3.z.object({
  id: import_zod3.z.string().optional(),
  name: import_zod3.z.string().min(1, "O name \xE9 obrigat\xF3rio"),
  email: import_zod3.z.string().min(1, "O email \xE9 obrigat\xF3rio"),
  password: import_zod3.z.string().min(1, "A descri\xE7\xE3o \xE9 obrigat\xF3ria")
});

// src/services/user.service.ts
var import_zod4 = require("zod");
var UserService = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.userRepository = userRepository;
  }
  async findUserByEmail(email) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    return user;
  }
  async findAll() {
    const users = await this.userRepository.findAll();
    if (!users) {
      throw new Error("No users found");
    }
    return users;
  }
  async create(input) {
    try {
      const validatedInput = userSchema.parse(input);
      const existingUser = await this.userRepository.findByEmail(
        validatedInput.email
      );
      if (existingUser) {
        throw new Error(
          `User with email ${validatedInput.email} already exists`
        );
      }
      const user = await this.userRepository.create(
        validatedInput.name,
        validatedInput.email,
        validatedInput.password
      );
      return user;
    } catch (error) {
      if (error instanceof import_zod4.ZodError) {
        throw new Error(
          `Validation failed: ${error.errors.map((e) => e.message).join(", ")}`
        );
      }
      throw error;
    }
  }
};
UserService = __decorateClass([
  (0, import_tsyringe12.injectable)(),
  __decorateParam(0, (0, import_tsyringe12.inject)("UserRepository"))
], UserService);

// src/container.ts
import_tsyringe13.container.registerSingleton("EnvConfig", EnvConfig);
import_tsyringe13.container.registerSingleton("FastifyConfig", FastifyConfig);
import_tsyringe13.container.registerSingleton("Router", Router);
import_tsyringe13.container.registerSingleton("MainRouter", MainRouter);
import_tsyringe13.container.registerSingleton("UserRouter", UserRouter);
import_tsyringe13.container.registerSingleton("MainController", MainController);
import_tsyringe13.container.registerSingleton("UserController", UserController);
import_tsyringe13.container.registerSingleton("SqliteConfig", SqliteConfig);
import_tsyringe13.container.registerSingleton(
  "CheckSessionMiddleware",
  CheckSessionMiddleware
);
import_tsyringe13.container.registerSingleton("AuthMiddleware", AuthMiddleware);
import_tsyringe13.container.registerSingleton("UserRepository", UserRepository);
import_tsyringe13.container.registerSingleton("UserService", UserService);

// src/app.ts
var main = () => {
  const app2 = import_tsyringe14.container.resolve(FastifyConfig).app();
  const env2 = import_tsyringe14.container.resolve(EnvConfig);
  const router = import_tsyringe14.container.resolve(Router);
  router.registerRoutes(app2);
  return { app: app2, env: env2 };
};

// src/index.ts
var { app, env } = main();
app.listen({
  port: env.API_PORT,
  host: "0.0.0.0"
}).then((address) => {
  console.info(`\u{1F389} API is running on port: ${address}`);
}).catch((error) => {
  console.error("\u274C Error on starting application:", error);
  process.exit(1);
});
