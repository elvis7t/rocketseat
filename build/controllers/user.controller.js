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

// src/controllers/user.controller.ts
var user_controller_exports = {};
__export(user_controller_exports, {
  UserController: () => UserController
});
module.exports = __toCommonJS(user_controller_exports);
var import_tsyringe = require("tsyringe");
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
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("UserRepository")),
  __decorateParam(1, (0, import_tsyringe.inject)("UserService"))
], UserController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
