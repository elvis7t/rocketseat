import { Either, left, right } from '@/core/either'
import { Injectable } from '@nestjs/common'
import { Student } from '@/domain/forum/enterprise/entities/student'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { HashGenerator } from '@/domain/forum/application/cryptography/hasher-generator'
import { StudentAlreadyExistsError } from './errors/student-already-exists-error'

interface RegisterStudentUseCaseRequest {
    name: String
    email: String
    password: String
}

type RegisterStudentUseCaseResponse = Either<
    StudentAlreadyExistsError,
    {
        student: Student
    }
>

@Injectable()
export class RegisterStudentUseCase {
    constructor(
        private studentsRepository: StudentsRepository,
        private hashGenerator: HashGenerator
    ) { }

    async execute({
        name,
        email,
        password
    }: RegisterStudentUseCaseRequest): Promise<RegisterStudentUseCaseResponse> {
        const studentWithSameEmail = await this.studentsRepository.findByEmail(email)

        if (studentWithSameEmail) {
            return left(new StudentAlreadyExistsError(email))
        }

        const hashedPassword = await this.hashGenerator.hash(password)

        const student = Student.create({
            name,
            email,
            password: hashedPassword
        })

        await this.studentsRepository.create(student)

        return right({
            student,
        })
    }
}
