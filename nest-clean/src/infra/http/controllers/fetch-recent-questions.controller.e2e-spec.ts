import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/prisma/database.module'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { QuestionFactory } from '@test/factories/make-question'
import { StudentFactory } from '@test/factories/make-student'
import request from 'supertest'

describe('Fetch recent question (E2E)', () => {
  let app: INestApplication
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [
        StudentFactory,
        QuestionFactory,
      ]
    }).compile()

    app = moduleRef.createNestApplication()
    jwt = moduleRef.get(JwtService)
    studentFactory = moduleRef.get(StudentFactory)
    questionFactory = moduleRef.get(QuestionFactory)
    
    await app.init()
  })

  test('[GET] /questions', async () => {
    const user = await studentFactory.makePrismaStudent()

    const accessToken = jwt.sign({ sub: user.id.toString() })

    await Promise.all([
      questionFactory.makePrismaQuestion({
        authorId: user.id,
        title: 'Question 01',
      }),
      questionFactory.makePrismaQuestion({
        authorId: user.id,
        title: 'Question 02',
      }),
    ])

    const response = await request(app.getHttpServer())
      .get('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        title: 'New Question',
        content: ' Content Question',
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      questions: expect.arrayContaining([
        expect.objectContaining({ title: 'Question 01' }),
        expect.objectContaining({ title: 'Question 02' }),
      ]),
    })
  })
})
