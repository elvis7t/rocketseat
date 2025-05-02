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

// src/services/user.service.ts
var user_service_exports = {};
__export(user_service_exports, {
  UserService: () => UserService
});
module.exports = __toCommonJS(user_service_exports);
var import_tsyringe = require("tsyringe");

// src/validators/userSchema.ts
var import_zod = require("zod");
var userSchema = import_zod.z.object({
  id: import_zod.z.string().optional(),
  name: import_zod.z.string().min(1, "O name \xE9 obrigat\xF3rio"),
  email: import_zod.z.string().min(1, "O email \xE9 obrigat\xF3rio"),
  password: import_zod.z.string().min(1, "A descri\xE7\xE3o \xE9 obrigat\xF3ria")
});

// src/services/user.service.ts
var import_zod2 = require("zod");
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
      if (error instanceof import_zod2.ZodError) {
        throw new Error(
          `Validation failed: ${error.errors.map((e) => e.message).join(", ")}`
        );
      }
      throw error;
    }
  }
};
UserService = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("UserRepository"))
], UserService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserService
});
