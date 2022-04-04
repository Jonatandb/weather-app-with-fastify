// TODO: Remove this file after first route creation

const supertest = require('supertest')

afterAll(() => {
  fastify.close()
})

describe('GET /v1 (demo route)', () => {
  it('should return "Hello World!" with status code 200', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/v1',
    })
    expect(response.statusCode).toEqual(200)
    expect(response.headers).toHaveProperty('content-type')
    expect(response.headers['content-type']).toEqual('text/plain; charset=utf-8')
    expect(response.body).not.toBeNull()
    expect(response.body).toEqual('Hello World!')
  })
})

describe('GET /fetch (demo route) to an external API', () => {
  it('should return json object with "userId" property and status code 200', async () => {
    await fastify.ready()
    const response = await supertest(fastify.server)
      .get('/fetch')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(response.body).not.toBeNull()
    expect(response.body).toHaveProperty('userId')
  })
})
