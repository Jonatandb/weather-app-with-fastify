afterAll(() => {
  fastify.close()
})

describe('GET /v1/location', () => {
  it('should return city and status code 200', async () => {
    try {
      const response = await fastify.inject({
        method: 'GET',
        url: '/v1/location',
      })
      expect(response.statusCode).toEqual(200)
      expect(response.headers).toHaveProperty('content-type')
      expect(response.headers['content-type']).toEqual('text/plain; charset=utf-8')
      expect(response.body).not.toBeNull()
    } catch (error) {
      throw error
    }
  })
})
