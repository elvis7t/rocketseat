import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service';
import { PrismaAnswersRepository } from './repositories/prisma-answers-repository';
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository';
import { PrismaQuestionAttachmentsRepository } from './repositories/prisma-question-attachments-repository';
import { PrismaQuestionCommentsRepository } from './repositories/prisma-question-comments-repository';
import { PrismaAnswerAttachmentsRepository } from './repositories/prisma-answer-attachments-repository';
import { PrismaAnswerCommentsRepository } from './repositories/prisma-answer-comments-repository';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository';
import { PrismaStudentsRepository } from './repositories/prisma-students-repository';

@Module({
    providers: [
        PrismaService,
        {
            provide: QuestionsRepository,
            useClass: PrismaQuestionsRepository
        },       
        {
            provide: StudentsRepository,
            useClass: PrismaStudentsRepository
        },
        PrismaQuestionAttachmentsRepository,
        PrismaAnswerAttachmentsRepository,
        PrismaQuestionCommentsRepository,
        PrismaAnswerCommentsRepository,
        PrismaAnswersRepository,
    ],
    exports: [
        PrismaService,
        QuestionsRepository,
        StudentsRepository,
        PrismaQuestionAttachmentsRepository,
        PrismaAnswerAttachmentsRepository,
        PrismaQuestionCommentsRepository,
        PrismaAnswerCommentsRepository,
        PrismaAnswersRepository,
    ],
})

export class DatabaseModule { }
