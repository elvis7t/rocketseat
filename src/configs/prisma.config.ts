import { injectable, inject } from 'tsyringe'
import { PrismaClient } from '@prisma/client'
import { EnvConfig } from '@/configs'

@injectable()
export class PrismaConfig {
  private prismaClient: PrismaClient

  constructor(@inject(EnvConfig) private envConfig: EnvConfig) {
    this.prismaClient = new PrismaClient({})
  }

  public getClient(): PrismaClient {
    return this.prismaClient
  }
}
