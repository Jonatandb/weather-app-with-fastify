const { forecastSchema } = require('../../controllers/schemas/v1/forecast')
const { forecastHandler } = require('../../controllers/handlers/v1/forecast')

const forecastOpts = {
  schema: forecastSchema,
  handler: forecastHandler,
}

const forecastRoute = function (fastify, opts, done) {
  fastify.get('/forecast/:city?', forecastOpts)
  done()
}

module.exports = forecastRoute
