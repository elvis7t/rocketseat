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

// src/middlewares/checksession.middleware.ts
var checksession_middleware_exports = {};
__export(checksession_middleware_exports, {
  CheckSessionMiddleware: () => CheckSessionMiddleware
});
module.exports = __toCommonJS(checksession_middleware_exports);
var import_tsyringe = require("tsyringe");

// src/constants.ts
var import_http_status_codes = require("http-status-codes");

// src/errors/http.error.ts
var HttpError = class extends Error {
  statusCode;
  details;
  constructor({ statusCode, message, details }) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
};

// src/middlewares/checksession.middleware.ts
var CheckSessionMiddleware = class {
  constructor(env) {
    this.env = env;
    this.env = env;
  }
  async checkSessionIdExists(request, replay) {
    const { sessionId } = request.cookies;
    if (!sessionId) {
      throw new HttpError({
        statusCode: import_http_status_codes.StatusCodes.UNAUTHORIZED,
        message: "Unauthorized"
      });
    }
    request.sessionId = sessionId;
  }
};
CheckSessionMiddleware = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("EnvConfig"))
], CheckSessionMiddleware);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckSessionMiddleware
});
