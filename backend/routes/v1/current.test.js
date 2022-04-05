const supertest = require('supertest')

afterAll(() => {
  fastify.close()
})

describe('GET /v1/current', () => {
  it('should return weather infomation (JSON object) of "Madrid" and status code 200', async () => {
    try {
      await fastify.ready()
      const response = await supertest(fastify.server)
        .get('/v1/current/madrid')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body).not.toBeNull()
      expect(response.body).toHaveProperty('name')
      expect(response.body.name).toBe('Madrid')
    } catch (error) {
      throw error
    }
  })

  it('should return weather information (JSON object) of city getted from user IP and status code 200', async () => {
    try {
      await fastify.ready()
      const response = await supertest(fastify.server)
        .get('/v1/current')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body).not.toBeNull()
      expect(response.body).toHaveProperty('name')
    } catch (error) {
      throw error
    }
  })
})
