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

// src/configs/fastify.config.ts
var fastify_config_exports = {};
__export(fastify_config_exports, {
  FastifyConfig: () => FastifyConfig
});
module.exports = __toCommonJS(fastify_config_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FastifyConfig
});
