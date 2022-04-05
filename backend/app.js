const fastify = require('fastify')
const fetch = require('node-fetch')
require('dotenv').config()
const locationRoute = require('./routes/v1/location')

const build = function (opts = {}) {
  const app = fastify(opts)

  app.register(locationRoute, { prefix: '/v1' })

  return app
}

module.exports = { build }
