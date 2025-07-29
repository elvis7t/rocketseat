import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { AuthenticateService } from '@/services'
import { HttpStatusCodeEnum } from '../../constants'

@injectable()
export class RefreshController {
  constructor(
    @inject('AuthenticateService')
    private readonly authenticateService: AuthenticateService,
  ) {
    this.authenticateService = authenticateService
  }

  async refresh(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    await request.jwtVerify({ onlyCookie: true })

    const userId = request.user.sub

    const { role } = request.user

    const token = await reply.jwtSign(
      {
        role,
      },
      {
        sign: {
          sub: userId,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      {
        role,
      },
      {
        sign: {
          sub: userId,
          expiresIn: '7d',
        },
      },
    )

    return reply
      .code(HttpStatusCodeEnum.OK)
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        httpOnly: true,
        secure: false, // Necessário false para desenvolvimento local (HTTP)
        sameSite: 'lax',
      })
      .send({ token })
  }
}
