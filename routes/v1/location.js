const { locationSchema } = require('../../controllers/schemas/v1/location')
const { locationHandler } = require('../../controllers/handlers/v1/location')

const locationOpts = {
  schema: locationSchema,
  handler: locationHandler,
}

const locationRoute = function (fastify, opts, done) {
  fastify.get('/location', locationOpts)
  done()
}

module.exports = locationRoute
