import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { Module } from '@nestjs/common'
import { JwtEncrypter } from './jwt-encrypter'
import { HashComparer } from '@/domain/forum/application/cryptography/hasher-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptography/hasher-generator'
import { BcryptHasher } from './bcrypt-hasher'

@Module({
    providers: [
        { provide: Encrypter, useClass: JwtEncrypter },
        { provide: HashComparer, useClass: BcryptHasher },
        { provide: HashGenerator, useClass: BcryptHasher },
    ],
    exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographyModule { }