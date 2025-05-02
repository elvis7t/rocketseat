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

// src/configs/sqlite.config.ts
var sqlite_config_exports = {};
__export(sqlite_config_exports, {
  SqliteConfig: () => SqliteConfig
});
module.exports = __toCommonJS(sqlite_config_exports);
var import_tsyringe = require("tsyringe");
var import_knex = __toESM(require("knex"));
var import_path = require("path");
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
        directory: (0, import_path.resolve)(process.cwd(), "db", "migrations")
      }
    });
  }
  knexInstance;
  getConnection() {
    return this.knexInstance;
  }
};
SqliteConfig = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("EnvConfig"))
], SqliteConfig);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SqliteConfig
});
