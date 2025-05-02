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

// src/routes/main.router.ts
var main_router_exports = {};
__export(main_router_exports, {
  MainRouter: () => MainRouter
});
module.exports = __toCommonJS(main_router_exports);
var import_tsyringe = require("tsyringe");
var MainRouter = class {
  constructor(mainController, checkSessionMiddleware, authMiddleware) {
    this.mainController = mainController;
    this.checkSessionMiddleware = checkSessionMiddleware;
    this.authMiddleware = authMiddleware;
    this.mainController = mainController;
    this.checkSessionMiddleware = checkSessionMiddleware;
    this.authMiddleware = authMiddleware;
  }
  registerRoutes(app, _options, done) {
    app.get(
      "/meals",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getAll(request, reply);
      }
    );
    app.post(
      "/meal",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.createMeal(request, reply);
      }
    );
    app.put(
      "/meal/:id",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.updateMeal(request, reply);
      }
    );
    app.delete(
      "/meal/:id",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.deleteMeal(request, reply);
      }
    );
    app.get(
      "/meals/user",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealSumaryByUser(request, reply);
      }
    );
    app.get(
      "/meal/:id",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealById(request, reply);
      }
    );
    app.get(
      "/meal/sumary",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealSumaryByUser(request, reply);
      }
    );
    app.get(
      "/meal/ondiet",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealOnDietByUser(request, reply);
      }
    );
    app.get(
      "/meal/offdiet",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getMealOffDietByUser(request, reply);
      }
    );
    app.get(
      "/meals/longest-diet-sequence",
      {
        preHandler: [
          (request, reply) => this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply)
        ]
      },
      async (request, reply) => {
        return this.mainController.getLongestDietSequence(request, reply);
      }
    );
    if (done) {
      done();
    }
    return app;
  }
};
MainRouter = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("MainController")),
  __decorateParam(1, (0, import_tsyringe.inject)("CheckSessionMiddleware")),
  __decorateParam(2, (0, import_tsyringe.inject)("AuthMiddleware"))
], MainRouter);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MainRouter
});
