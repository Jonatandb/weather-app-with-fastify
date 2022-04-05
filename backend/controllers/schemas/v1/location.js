const location = {
  type: 'string',
  example: 'Buenos Aires',
  description: 'City name',
}

const locationSchema = {
  tags: ['WeatherApp-Fastify API'],
  summary: 'Get city by client IP location data',
  response: {
    200: location,
  },
}

module.exports = { locationSchema }
