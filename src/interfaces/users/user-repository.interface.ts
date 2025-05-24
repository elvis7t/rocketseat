import { User as PrismaUser } from '@/generated/prisma' 
import { Prisma } from '@prisma/client'

export interface UserRepositoryInterface {
    findAll(): Promise<PrismaUser[]>;
    create(data: Prisma.UserCreateInput): Promise<PrismaUser>;
    findByEmail(email: string): Promise<PrismaUser | null>;
    findById(id: string): Promise<PrismaUser | null>;
}