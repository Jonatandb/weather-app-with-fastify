const NodeEnvironment = require('jest-environment-node')
const { build: fastifyBuilder } = require('../app')

class FastifyEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup()
    const fastify = await fastifyBuilder({})
    this.global.fastify = fastify
  }
}

module.exports = FastifyEnvironment
