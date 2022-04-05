module.exports = {
  routePrefix: '/v1/openapi',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Swagger of WeatherApp-Fastify API',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: `localhost:${process.env.PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'WeatherApp-Fastify API',
        description: 'Swagger of WeatherApp-Fastify API',
      },
    ],
  },
}
