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

// src/validators/index.ts
var validators_exports = {};
__export(validators_exports, {
  userSchema: () => userSchema
});
module.exports = __toCommonJS(validators_exports);

// src/validators/userSchema.ts
var import_zod = require("zod");
var userSchema = import_zod.z.object({
  id: import_zod.z.string().optional(),
  name: import_zod.z.string().min(1, "O name \xE9 obrigat\xF3rio"),
  email: import_zod.z.string().min(1, "O email \xE9 obrigat\xF3rio"),
  password: import_zod.z.string().min(1, "A descri\xE7\xE3o \xE9 obrigat\xF3ria")
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userSchema
});
