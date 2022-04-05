const nodeFetch = require('node-fetch')
const publicIP = require('public-ip')
const { isIPLocalhost } = require('../utils/utils')

const getCityByRequest = async request => {
  const ip = await getClientPublicIPByRequest(request)
  const locationData = await getLocationDataByIP(ip)
  return locationData.city
}

const getClientPublicIPByRequest = async req => {
  const v4IP = await publicIP.v4()
  const clientIP = isIPLocalhost(req.ip) ? v4IP : req.ip
  return clientIP
}

const getLocationDataByIP = async ip => {
  const response = await nodeFetch(`${process.env.IP_API_SERVICE_BASE_URL}/${ip}`)
  const locationData = await response.json()
  return locationData
}

module.exports = {
  getCityByRequest,
  getClientPublicIPByRequest,
  getLocationDataByIP,
}
