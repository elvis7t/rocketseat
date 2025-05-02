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

// src/middlewares/index.ts
var middlewares_exports = {};
__export(middlewares_exports, {
  AuthMiddleware: () => AuthMiddleware,
  CheckSessionMiddleware: () => CheckSessionMiddleware
});
module.exports = __toCommonJS(middlewares_exports);

// src/middlewares/auth.middleware.ts
var import_tsyringe = require("tsyringe");
var import_zod = require("zod");
var authInputSchema = import_zod.z.object({
  sessionId: import_zod.z.string({
    required_error: "Session ID \xE9 obrigat\xF3rio.",
    invalid_type_error: "Session ID deve ser uma string."
  }).min(1, {
    message: "Session ID n\xE3o pode ser vazio."
  }),
  emailFromHeader: import_zod.z.string({
    required_error: "Cabe\xE7alho de autoriza\xE7\xE3o (email) \xE9 obrigat\xF3rio.",
    invalid_type_error: "Cabe\xE7alho de autoriza\xE7\xE3o (email) deve ser uma string."
  }).email({
    message: "Formato de e-mail inv\xE1lido no cabe\xE7alho de autoriza\xE7\xE3o."
  })
}).strict();
var AuthMiddleware = class {
  constructor(userService) {
    this.userService = userService;
    this.userService = userService;
  }
  async handle(request, reply) {
    const inputToValidate = {
      sessionId: request.sessionId,
      emailFromHeader: request.headers.authorization
    };
    const validationResult = authInputSchema.safeParse(inputToValidate);
    if (!validationResult.success) {
      return reply.status(401).send({
        error: "Dados de autentica\xE7\xE3o inv\xE1lidos ou ausentes.",
        issues: validationResult.error.flatten().fieldErrors
      });
    }
    const { emailFromHeader: validatedEmail } = validationResult.data;
    try {
      const user = await this.userService.findUserByEmail(validatedEmail);
      if (!user) {
        return reply.status(401).send({ error: "Usu\xE1rio n\xE3o encontrado ou n\xE3o autenticado." });
      }
      request.user = user;
    } catch (error) {
      console.error("Erro no AuthMiddleware ao buscar usu\xE1rio:", error);
      return reply.status(500).send({ error: "Erro interno do servidor ao processar autentica\xE7\xE3o." });
    }
  }
};
AuthMiddleware = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("UserService"))
], AuthMiddleware);

// src/middlewares/checksession.middleware.ts
var import_tsyringe2 = require("tsyringe");

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
  (0, import_tsyringe2.injectable)(),
  __decorateParam(0, (0, import_tsyringe2.inject)("EnvConfig"))
], CheckSessionMiddleware);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthMiddleware,
  CheckSessionMiddleware
});
