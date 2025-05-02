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

// src/controllers/main.controller.ts
var main_controller_exports = {};
__export(main_controller_exports, {
  MainController: () => MainController
});
module.exports = __toCommonJS(main_controller_exports);
var import_tsyringe = require("tsyringe");
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
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("SqliteConfig"))
], MainController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainController
});
