const { isIPLocalhost, knownLocalhostIPList } = require('../utils/utils')
const {
  getCityByRequest,
  getClientPublicIPByRequest,
  getLocationDataByIP,
  WeatherDataType,
  getWeatherForecastAPIURLByCity,
  getWeatherDataByCity,
  getWeatherData,
  getForecastDataByCity,
  getForecastData,
} = require('./lib')

const exampledotcomIP = '192.0.43.10' // Domain: 'example.com' -> Location -> city: Anthony, country: United States

describe('getCityByRequest( request ) => city name', () => {
  it('should return city "Anthony" since the request has an IP in that location', async () => {
    const request = { ip: exampledotcomIP }
    const city = await getCityByRequest(request)
    expect(city).toBe('Anthony')
  })
})

describe('getClientPublicIPByRequest( req ) => returns the public client IP', () => {
  it('should return the public client IP whenever the request has an IP known as localhost', async () => {
    const allLocalhostIPWhereReplacedByAPublicIP = knownLocalhostIPList.every(async localhostIP => {
      const fakeRequestIP = localhostIP
      const request = { ip: fakeRequestIP }
      const ClientPublicIP = await getClientPublicIPByRequest(request)
      const result = isIPLocalhost(ClientPublicIP)
      return result
    })
    expect(allLocalhostIPWhereReplacedByAPublicIP).toBeTruthy()
  })
  it(`should return the same IP when the request has an IP which is not known as localhost.`, async () => {
    const fakeRequestIP = exampledotcomIP
    const request = { ip: fakeRequestIP }
    const ClientPublicIP = await getClientPublicIPByRequest(request)
    expect(ClientPublicIP).toBe(fakeRequestIP)
  })
})

describe('getLocationDataByIP( ip )', () => {
  it('should return the location data of the provided known IP', async () => {
    const locationData = await getLocationDataByIP(exampledotcomIP)
    expect(locationData).not.toBeNull()
    expect(locationData.city).toBe('Anthony')
    expect(locationData.country).toBe('United States')
  })
})

describe('getWeatherForecastAPIURLByCity( weatherDataType, city )', () => {
  it('should return the correct URL for the provided weather data type', async () => {
    const weatherDataType = WeatherDataType.Weather
    const city = 'Bariloche'
    const apiURL = getWeatherForecastAPIURLByCity(weatherDataType, city)
    expect(apiURL).toBe(
      `${process.env.WEATHER_SERVICE_BASE_URL}/${weatherDataType}?appid=${process.env.WEATHER_SERVICE_API_KEY}&units=metric&lang=es&q=${city}`
    )
  })
})

describe('getWeatherDataByCity( city )', () => {
  it('should return the weather data of the provided city', async () => {
    const city = 'Bariloche'
    const weatherData = await getWeatherDataByCity(city)
    expect(weatherData).not.toBeNull()
    expect(Object.keys(weatherData).length).not.toBe(0)
    expect(weatherData).toHaveProperty('name')
    expect(weatherData.name).toBe(city)
  })
})

describe('getWeatherData( request )', () => {
  it('should return the weather data of the city provided in the request param city', async () => {
    const request = {
      params: { city: 'Bariloche' },
    }
    const weatherData = await getWeatherData(request)
    expect(weatherData).not.toBeNull()
    expect(Object.keys(weatherData).length).not.toBe(0)
    expect(weatherData).toHaveProperty('name')
    expect(weatherData.name).toBe(request.params.city)
  })

  it('should return the weather data of the city that belongs to the client IP when the param city was not provided', async () => {
    const request = {
      params: {},
      ip: exampledotcomIP,
    }
    const weatherData = await getWeatherData(request)
    expect(weatherData).not.toBeNull()
    expect(Object.keys(weatherData).length).not.toBe(0)
    expect(weatherData).toHaveProperty('name')
    expect(weatherData.name).toBe('Anthony')
  })

  it('should return an empty object when the param city has an invalid or unknown city name', async () => {
    const request = {
      params: { city: 'Jonatandb@gmail.com' },
    }
    const weatherData = await getWeatherData(request)
    expect(weatherData).not.toBeNull()
    expect(Object.keys(weatherData).length).toBe(0)
  })
})

describe('getForecastDataByCity( city )', () => {
  it('should return the forecast data of the provided city', async () => {
    const city = 'Bariloche'
    const forecastData = await getForecastDataByCity(city)
    expect(forecastData).not.toBeNull()
    expect(Object.keys(forecastData).length).not.toBe(0)
    expect(forecastData).toHaveProperty('city.name')
    expect(forecastData.city.name).toBe(city)
  })
})

describe('getForecastData( request )', () => {
  it('should return the forecast data of the city provided in the request param city', async () => {
    const request = {
      params: { city: 'Bariloche' },
    }
    const forecastData = await getForecastData(request)
    expect(forecastData).not.toBeNull()
    expect(Object.keys(forecastData).length).not.toBe(0)
    expect(forecastData).toHaveProperty('city.name')
    expect(forecastData.city.name).toBe(request.params.city)
  })

  it('should return the forecast data of the city that belongs to the client IP when the param city was not provided', async () => {
    const request = {
      params: {},
      ip: exampledotcomIP,
    }
    const forecastData = await getForecastData(request)
    expect(forecastData).not.toBeNull()
    expect(Object.keys(forecastData).length).not.toBe(0)
    expect(forecastData).toHaveProperty('city.name')
    expect(forecastData.city.name).toBe('Anthony')
  })

  it('should return an empty object when the param city has an invalid or unknown city name', async () => {
    const request = {
      params: { city: 'Jonatandb@gmail.com' },
    }
    const forecastData = await getForecastData(request)
    expect(forecastData).not.toBeNull()
    expect(Object.keys(forecastData).length).toBe(0)
  })
})
