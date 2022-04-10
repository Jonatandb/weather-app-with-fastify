const { getWeatherData } = require('../../../lib/lib')

const currentHandler = async (req, reply) => {
  reply.send(await getWeatherData(req))
}

module.exports = {
  currentHandler,
}
