"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/configs/index.ts
var configs_exports = {};
__export(configs_exports, {
  EnvConfig: () => EnvConfig,
  FastifyConfig: () => FastifyConfig,
  SqliteConfig: () => SqliteConfig
});
module.exports = __toCommonJS(configs_exports);

// src/configs/fastify.config.ts
var import_cors = __toESM(require("@fastify/cors"));
var import_fastify = __toESM(require("fastify"));
var import_tsyringe = require("tsyringe");
var import_cookie = __toESM(require("@fastify/cookie"));
var FastifyConfig = class {
  constructor(env) {
    this.env = env;
    this.env = env;
  }
  app() {
    const app = (0, import_fastify.default)();
    app.register(import_cors.default, {
      origin: this.env.CORS_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"]
    });
    app.setSerializerCompiler((response) => {
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
    app.register(import_cookie.default);
    return app;
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
  constructor(env) {
    this.env = env;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EnvConfig,
  FastifyConfig,
  SqliteConfig
});
