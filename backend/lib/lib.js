const nodeFetch = require('node-fetch')
const publicIP = require('public-ip')
const { isIPLocalhost } = require('../utils/utils')

const WeatherDataType = {
  Weather: 'weather',
  Forecast: 'forecast',
}

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

const getWeatherForecastAPIURLByCity = (weatherDataType, city) => {
  const baseURL = `${process.env.WEATHER_SERVICE_BASE_URL}/${weatherDataType}?appid=${process.env.WEATHER_SERVICE_API_KEY}&units=metric&lang=es`
  const finalURL = `${baseURL}&q=${city}`
  return finalURL
}

const getWeatherDataByCity = async city => {
  try {
    const apiURL = getWeatherForecastAPIURLByCity(WeatherDataType.Weather, city)
    const response = await nodeFetch(apiURL)
    const weatherData = await response.json()
    if (!weatherData || !weatherData.weather)
      throw new Error(`No weather data found related to city: ${city}`)
    return weatherData
  } catch (error) {
    console.log(error)
    return {}
  }
}
const getWeatherData = async request => {
  const city = request.params?.city || (await getCityByRequest(request))
  const weatherData = await getWeatherDataByCity(city)
  return weatherData
}

module.exports = {
  getCityByRequest,
  getClientPublicIPByRequest,
  getLocationDataByIP,
  getWeatherData,
}
