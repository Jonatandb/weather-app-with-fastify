const fastify = require('fastify')
require('dotenv').config()

const build = function (opts = {}) {
  const app = fastify(opts)

  app.get('/v1', (request, reply) => reply.send('Hello World!'))

  return app
}

module.exports = { build }
