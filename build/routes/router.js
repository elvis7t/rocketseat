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

// src/routes/router.ts
var router_exports = {};
__export(router_exports, {
  Router: () => Router
});
module.exports = __toCommonJS(router_exports);
var import_tsyringe = require("tsyringe");
var Router = class {
  constructor(mainRouter, userRouter) {
    this.mainRouter = mainRouter;
    this.userRouter = userRouter;
    this.mainRouter = mainRouter;
    this.userRouter = userRouter;
  }
  registerRoutes(app, _options, done) {
    app.register(this.mainRouter.registerRoutes.bind(this.mainRouter), {
      prefix: "/v1"
    });
    app.register(this.userRouter.registerRoutes.bind(this.userRouter), {
      prefix: "/v1"
    });
    if (done) {
      done();
    }
    return app;
  }
};
Router = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("MainRouter")),
  __decorateParam(1, (0, import_tsyringe.inject)("UserRouter"))
], Router);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Router
});
