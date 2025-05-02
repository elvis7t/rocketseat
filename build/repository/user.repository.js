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
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/repository/user.repository.ts
var user_repository_exports = {};
__export(user_repository_exports, {
  UserRepository: () => UserRepository
});
module.exports = __toCommonJS(user_repository_exports);
var import_tsyringe = require("tsyringe");
var import_crypto = require("crypto");
var UserRepository = class {
  constructor(sqliteConfig) {
    this.sqliteConfig = sqliteConfig;
    this.sqliteConfig = sqliteConfig;
  }
  async findAll() {
    const knex = this.sqliteConfig.getConnection();
    const users = await knex("users").select("*");
    return users;
  }
  async create(name, email, password) {
    const user = {
      id: (0, import_crypto.randomUUID)(),
      name,
      email,
      password,
      created_at: /* @__PURE__ */ new Date()
    };
    const knex = this.sqliteConfig.getConnection();
    await knex("users").insert(user);
    return user;
  }
  async findByEmail(email) {
    const knex = this.sqliteConfig.getConnection();
    const user = await knex("users").where({ email }).first();
    return user;
  }
  async findById(id) {
    const knex = this.sqliteConfig.getConnection();
    const user = await knex("users").where({ id }).first();
    return user;
  }
};
UserRepository = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("SqliteConfig"))
], UserRepository);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRepository
});
