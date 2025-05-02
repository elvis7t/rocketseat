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

// src/constants.ts
var constants_exports = {};
__export(constants_exports, {
  HttpMethodsEnum: () => HttpMethodsEnum,
  HttpStatusCodeEnum: () => import_http_status_codes.StatusCodes,
  LogLevelsEnum: () => LogLevelsEnum,
  NodeEnvEnum: () => NodeEnvEnum
});
module.exports = __toCommonJS(constants_exports);
var import_http_status_codes = require("http-status-codes");
var NodeEnvEnum = /* @__PURE__ */ ((NodeEnvEnum2) => {
  NodeEnvEnum2["Development"] = "development";
  NodeEnvEnum2["Production"] = "production";
  return NodeEnvEnum2;
})(NodeEnvEnum || {});
var LogLevelsEnum = /* @__PURE__ */ ((LogLevelsEnum2) => {
  LogLevelsEnum2["Debug"] = "debug";
  LogLevelsEnum2["Error"] = "error";
  LogLevelsEnum2["Info"] = "info";
  return LogLevelsEnum2;
})(LogLevelsEnum || {});
var HttpMethodsEnum = /* @__PURE__ */ ((HttpMethodsEnum2) => {
  HttpMethodsEnum2["DELETE"] = "DELETE";
  HttpMethodsEnum2["PATCH"] = "PATCH";
  HttpMethodsEnum2["POST"] = "POST";
  HttpMethodsEnum2["GET"] = "GET";
  HttpMethodsEnum2["PUT"] = "PUT";
  return HttpMethodsEnum2;
})(HttpMethodsEnum || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HttpMethodsEnum,
  HttpStatusCodeEnum,
  LogLevelsEnum,
  NodeEnvEnum
});
