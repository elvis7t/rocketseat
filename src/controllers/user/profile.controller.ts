import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable } from 'tsyringe'
import { UserProfileService } from '@/services'
import { makeGetUserProfileServiceFactory } from '@/services/factories'
import { HttpStatusCodeEnum } from '@/constants'

@injectable()
export class ProfileController {
  private readonly profileService: UserProfileService
  constructor() {
    this.profileService = makeGetUserProfileServiceFactory()
  }

  async profile(
    request: FastifyRequest & { user: { sub: string } },
    reply: FastifyReply,
  ): Promise<void> {
    const { user } = await this.profileService.execute({
      userId: request.user.sub,
    })

    return reply.status(HttpStatusCodeEnum.OK).send({
      user: {
        ...user,
        password_hash: undefined,
      },
    })
  }
}
