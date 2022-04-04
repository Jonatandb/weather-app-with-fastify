const fastify = require('fastify')
const fetch = require('node-fetch')
require('dotenv').config()

const build = function (opts = {}) {
  const app = fastify(opts)

  // Demo route //TODO: remove this
  app.get('/v1', (request, reply) => reply.send('Hello World!'))

  // Demo route //TODO: remove this
  app.get('/fetch', async function (request, reply) {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(data => data.json())
      .then(data => data)
  })

  return app
}

module.exports = { build }
