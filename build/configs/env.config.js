"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/configs/env.config.ts
var env_config_exports = {};
__export(env_config_exports, {
  EnvConfig: () => EnvConfig
});
module.exports = __toCommonJS(env_config_exports);
var import_dotenv = require("dotenv");
var import_path = require("path");
var import_zod = require("zod");
var import_tsyringe = require("tsyringe");
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
  (0, import_tsyringe.injectable)()
], EnvConfig);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EnvConfig
});
