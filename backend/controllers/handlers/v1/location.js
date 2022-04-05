const { getCityByRequest } = require('../../../lib/lib')

const locationHandler = async (req, reply) => {
  reply.send(await getCityByRequest(req))
}

module.exports = {
  locationHandler,
}
