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

// src/routes/user.router.ts
var user_router_exports = {};
__export(user_router_exports, {
  UserRouter: () => UserRouter
});
module.exports = __toCommonJS(user_router_exports);
var import_tsyringe = require("tsyringe");
var UserRouter = class {
  constructor(userController, authMiddleware, checkSessionMiddleware) {
    this.userController = userController;
    this.authMiddleware = authMiddleware;
    this.checkSessionMiddleware = checkSessionMiddleware;
    this.userController = userController;
    this.authMiddleware = authMiddleware;
    this.checkSessionMiddleware = checkSessionMiddleware;
  }
  registerRoutes(app, _options, done) {
    app.get("/users", async (request, reply) => {
      return this.userController.getAllUsers(request, reply);
    });
    app.post(
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
    app.get("/users/profile", async (request, reply) => {
      return this.userController.profile(request, reply);
    });
    if (done) {
      done();
    }
    return app;
  }
};
UserRouter = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("UserController")),
  __decorateParam(1, (0, import_tsyringe.inject)("AuthMiddleware")),
  __decorateParam(2, (0, import_tsyringe.inject)("CheckSessionMiddleware"))
], UserRouter);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRouter
});
