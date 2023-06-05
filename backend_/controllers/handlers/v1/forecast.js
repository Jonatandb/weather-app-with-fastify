const { getForecastData } = require('../../../lib/lib')

const forecastHandler = async (req, reply) => {
  reply.send(await getForecastData(req))
}

module.exports = {
  forecastHandler,
}
