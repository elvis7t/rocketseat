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
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository';
import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository';
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository';
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository';
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository';

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
        {
            provide: QuestionAttachmentsRepository,
            useClass: PrismaQuestionAttachmentsRepository
        },
        {
            provide: AnswerAttachmentsRepository,
            useClass: PrismaAnswerAttachmentsRepository
        },
        {
            provide: QuestionCommentsRepository,
            useClass: PrismaQuestionCommentsRepository
        },
        {
            provide: AnswerCommentsRepository,
            useClass: PrismaAnswerCommentsRepository
        },
        {
            provide: AnswersRepository,
            useClass: PrismaAnswersRepository
        },
    ],
    exports: [
        PrismaService,
        QuestionsRepository,
        StudentsRepository,
        QuestionAttachmentsRepository,
        AnswerAttachmentsRepository,
        QuestionCommentsRepository,
        AnswerCommentsRepository,
        AnswersRepository,
    ],
})

export class DatabaseModule { }
