import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { UserRepositoryInterface } from '@/interfaces'
import { Prisma, User as PrismaUser } from '@/generated/prisma'

@injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @inject(PrismaConfig)
    private readonly prismaConfig: PrismaConfig,
  ) {
    this.prismaConfig = prismaConfig
  }

  public get prisma() {
    return this.prismaConfig.getClient()
  }

  public async findAll(): Promise<PrismaUser[]> {
    return await this.prisma.user.findMany()
  }

  public async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data })
  }

  public async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    })
  }

  public async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    })
  }
}
