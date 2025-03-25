import { test, beforeAll, afterAll, describe, expect } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions routes', () => {
  beforeAll(async () => {
    execSync('npm run knex migrate:latest')
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('user can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'Salário',
        amount: 1000,
        type: 'credit',
      })
      .expect(201)
  })

  test('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Salário',
        amount: 1000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('set-cookie')
    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'Salário',
        amount: 1000,
      }),
    ])
  })
})
