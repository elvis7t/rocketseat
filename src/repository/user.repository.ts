import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { User } from '@/interfaces'

@injectable()
export class UserRepository {
  constructor(
    @inject(PrismaConfig)
    private readonly prismaConfig: PrismaConfig,
  ) {
    this.prismaConfig = prismaConfig
  }

  private get prisma() {
    return this.prismaConfig.getClient()
  }

  public async findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  public async create(
    name: string,
    email: string,
    password_hash: string,
  ): Promise<User> {
    return this.prisma.user.create({
      data: { name, email, password_hash },
    })
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    })
  }

  public async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }
}
