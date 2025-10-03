import { Student } from '@/domain/forum/enterprise/entities/student'

export abstract class StudentsRepository {
    abstract findByEmail(email: String): Promise<Student | null>    
    abstract create(student: Student): Promise<void>  
}
