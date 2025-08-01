import { injectable, inject } from 'tsyringe'
import { PrismaClient } from '@/generated/prisma'
import { EnvConfig } from '@/configs'

@injectable()
export class PrismaConfig {
  private prismaClient: PrismaClient

  constructor(@inject(EnvConfig) private envConfig: EnvConfig) {
    this.prismaClient = new PrismaClient({
      datasources: {
        db: {
          url: this.envConfig.DATABASE_URL,
        },
      },
      log: this.envConfig.NODE_ENV === 'development' ? ['query'] : [],
    })
  }

  public getClient(): PrismaClient {
    return this.prismaClient
  }

  public async disconnect(): Promise<void> {
    await this.prismaClient.$disconnect()
  }
}
