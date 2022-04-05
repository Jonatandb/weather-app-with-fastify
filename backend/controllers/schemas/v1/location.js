const location = { type: 'string' }

const locationSchema = {
  tags: ['WeatherApp-Fastify API'],
  summary: 'Get city by client IP location data',
  response: {
    200: location,
  },
}

module.exports = { locationSchema }
