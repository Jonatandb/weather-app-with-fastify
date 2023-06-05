const fastify = require('fastify')
const fetch = require('node-fetch')
require('dotenv').config()
const locationRoute = require('./routes/v1/location')
const currentRoute = require('./routes/v1/current')
const forecastRoute = require('./routes/v1/forecast')
const swagger_config = require('./swagger_config')

const build = function (opts = {}) {
  const app = fastify(opts)

  app.register(require('fastify-cors'), {
    origin: [
      'https://jonatandb.github.io',
      'https://weatherapp-jdb.web.app',
      'https://weatherapp-jdb.netlify.app',
      'https://weatherapp-jdb.vercel.app',
    ],
  })
  app.register(require('fastify-swagger'), swagger_config)
  app.register(locationRoute, { prefix: '/v1' })
  app.register(currentRoute, { prefix: '/v1' })
  app.register(forecastRoute, { prefix: '/v1' })

  return app
}

module.exports = { build }
