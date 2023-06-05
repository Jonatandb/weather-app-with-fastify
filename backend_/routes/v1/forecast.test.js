const supertest = require('supertest')

afterAll(() => {
  fastify.close()
})

describe('GET /v1/forecast', () => {
  it('should return forecast information (JSON object) of "Madrid" and status code 200', async () => {
    try {
      await fastify.ready()
      const response = await supertest(fastify.server)
        .get('/v1/forecast/madrid')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body).not.toBeNull()
      expect(response.body).toHaveProperty('city.name', 'Madrid')
      expect(response.body.list).toBeInstanceOf(Array)
    } catch (error) {
      throw error
    }
  })

  it('should return forecast information (JSON object) of city getted from user IP and status code 200', async () => {
    try {
      await fastify.ready()
      const response = await supertest(fastify.server)
        .get('/v1/forecast')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body).not.toBeNull()
      expect(response.body).toHaveProperty('city.name')
      expect(response.body.list).toBeInstanceOf(Array)
    } catch (error) {
      throw error
    }
  })

  it('should return an empty object and status code 200 when the provided city doesn\t exists', async () => {
    try {
      await fastify.ready()
      const response = await supertest(fastify.server)
        .get('/v1/forecast/buenos buenos aires')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body).not.toBeNull()
      expect(Object.keys(response.body).length).toBe(0)
    } catch (error) {
      throw error
    }
  })
})
