import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { UserRepositoryInterface } from '@/interfaces'
import { Prisma, User as PrismaUser } from '@/generated/prisma' // ajuste o caminho se necessário


@injectable()

export class UserRepository implements UserRepositoryInterface {
  constructor(
    @inject(PrismaConfig)
    private readonly prismaConfig: PrismaConfig,
  ) {
    this.prismaConfig = prismaConfig
  }

  private get prisma() {
    return this.prismaConfig.getClient()
  }

  public async findAll(): Promise<PrismaUser[]> {
    return this.prisma.user.findMany()
  }

  public async create(data: Prisma.UserCreateInput){
    return this.prisma.user.create({ data })
  }

  public async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    })
  }

  public async findById(id: string){
    return this.prisma.user.findUnique({
      where: { id },
    })
  }
}
