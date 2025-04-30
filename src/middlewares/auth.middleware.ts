import type { FastifyRequest, FastifyReply } from 'fastify'
import type { User } from '@/interfaces'

import { injectable, inject } from 'tsyringe'
import { UserService } from '@/services'
import { z } from 'zod'

const authInputSchema = z
  .object({
    sessionId: z
      .string({
        required_error: 'Session ID é obrigatório.',
        invalid_type_error: 'Session ID deve ser uma string.',
      })
      .min(1, {
        message: 'Session ID não pode ser vazio.',
      }),
    emailFromHeader: z
      .string({
        required_error: 'Cabeçalho de autorização (email) é obrigatório.',
        invalid_type_error:
          'Cabeçalho de autorização (email) deve ser uma string.',
      })
      .email({
        message: 'Formato de e-mail inválido no cabeçalho de autorização.',
      }),
  })
  .strict()

declare module 'fastify' {
  interface FastifyRequest {
    user?: User
    sessionId?: string
  }
}

@injectable()
export class AuthMiddleware {
  constructor(
    @inject('UserService')
    private readonly userService: UserService,
  ) {
    this.userService = userService
  }

  public async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const inputToValidate = {
      sessionId: request.sessionId,
      emailFromHeader: request.headers.authorization,
    }

    const validationResult = authInputSchema.safeParse(inputToValidate)

    if (!validationResult.success) {
      return reply.status(400).send({
        error: 'Dados de autenticação inválidos ou ausentes.',
        issues: validationResult.error.flatten().fieldErrors,
      })
    }

    const { emailFromHeader: validatedEmail } = validationResult.data

    try {
      const user = await this.userService.findUserByEmail(validatedEmail)

      if (!user) {
        return reply
          .status(401)
          .send({ error: 'Usuário não encontrado ou não autenticado.' })
      }

      request.user = user
    } catch (error) {
      console.error('Erro no AuthMiddleware ao buscar usuário:', error)
      return reply
        .status(500)
        .send({ error: 'Erro interno do servidor ao processar autenticação.' })
    }
  }
}
