const { currentSchema } = require('../../controllers/schemas/v1/current')
const { currentHandler } = require('../../controllers/handlers/v1/current')

const currentOpts = {
  schema: currentSchema,
  handler: currentHandler,
}

const currentRoute = function (fastify, opts, done) {
  fastify.get('/current/:city?', currentOpts)
  done()
}

module.exports = currentRoute
