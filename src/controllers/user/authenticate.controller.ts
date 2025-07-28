import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository/user.repository'
import { AuthenticateService } from '@/services'
import { HttpStatusCodeEnum } from '../../constants'
import { UserInvalidCredentialsError } from '@/errors/user.invalid-credentials-error'
import { AuthenticateBodySchema } from '@/validators'

@injectable()
export class AuthenticateController {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
    @inject('AuthenticateService')
    private readonly authenticateService: AuthenticateService,
  ) {
    this.userRepository = userRepository
    this.authenticateService = authenticateService
  }

  async authenticate(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { email, password } = AuthenticateBodySchema.parse(request.body)

    try {
      const { user } = await this.authenticateService.execute({
        email,
        password,
      })

      const token = await reply.jwtSign(
        {},
        {
          sign: {
            sub: user.id,
          },
        },
      )

      const refreshToken = await reply.jwtSign(
        {},
        {
          sign: {
            sub: user.id,
            expiresIn: '7d',
          },
        },
      )

      return reply
        .code(HttpStatusCodeEnum.OK)
        .setCookie('refreshToken', refreshToken, {
          path: '/',
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
        })
        .send({ token })
    } catch (error) {
      if (error instanceof UserInvalidCredentialsError) {
        return reply
          .code(HttpStatusCodeEnum.UNAUTHORIZED)
          .send({ error: error.message })
      }
    }
  }
}
