const {
  WeatherType,
  getWeatherForecastDataByCity,
  CURRENT_WEATHER_ENDPOINT,
  FORECAST_WEATHER_ENDPOINT,
  getCityName,
  LOCATION_ENDPOINT,
  parseWeatherData,
} = require('./lib')

const Data = {
  Weather: { weather: 'data' },
  Forecast: { forecast: 'data' },
}

describe('getCityName', () => {
  it('should return city name', async () => {
    fetch.mockResponseOnce('Bariloche')
    const cityName = await getCityName()
    expect(fetch).toHaveBeenCalledWith(LOCATION_ENDPOINT)
    expect(cityName).toEqual('Bariloche')
  })
})

describe('getWeatherForecastDataByCity', () => {
  // weather ✔️   city ✔️ => weatherData ✔️
  it('should return weather data if weatherType is Weather and city is not null', async () => {
    fetch.mockResponseOnce(JSON.stringify(Data.Weather))
    const weatherData = await getWeatherForecastDataByCity(
      WeatherType.Weather,
      'cityName',
    )
    expect(fetch).toHaveBeenCalledWith(CURRENT_WEATHER_ENDPOINT + '/cityName')
    expect(weatherData).toEqual(Data.Weather)
  })

  // weather ✔️     city null => null
  it('should return null if weatherType is Weather and city is null', async () => {
    await expect(
      getWeatherForecastDataByCity(WeatherType.Weather, null),
    ).rejects.toBe(null)
  })

  // weather null  city ✔️    => null
  it('should return null if weatherType is null and city is not null', async () => {
    await expect(getWeatherForecastDataByCity(null, 'cityName')).rejects.toBe(
      null,
    )
  })

  // forecast ✔️   city ✔️ => forecastData ✔️
  it('should return forecast data if weatherType is Forecast and city is not null', async () => {
    fetch.mockResponseOnce(JSON.stringify(Data.Forecast))
    const forecastData = await getWeatherForecastDataByCity(
      WeatherType.Forecast,
      'cityName',
    )
    expect(fetch).toHaveBeenCalledWith(FORECAST_WEATHER_ENDPOINT + '/cityName')
    expect(forecastData).toEqual(Data.Forecast)
  })

  // forecast ✔️     city null => null
  it('should return null if weatherType is Forecast and city is null', async () => {
    await expect(
      getWeatherForecastDataByCity(WeatherType.Forecast, null),
    ).rejects.toBe(null)
  })

  // forecast null  city ✔️    => null
  it('should return null if weatherType forecast is null and city is not null', async () => {
    await expect(getWeatherForecastDataByCity(null, 'cityName')).rejects.toBe(
      null,
    )
  })

  // weather null  city null => null
  it('should return null if weatherType is null and city is null', async () => {
    await expect(getWeatherForecastDataByCity(null, null)).rejects.toBe(null)
  })
})

describe('parseWeatherData', () => {
  it('should return null if weatherData param is null', async () => {
    const parsedWeatherData = await parseWeatherData(null)
    expect(parsedWeatherData).toEqual(null)
  })

  it('should return correct parsed data object if weatherData param is valid', async () => {
    const weatherData = {
      main: {
        temp: 10,
        temp_min: 5,
        temp_max: 15,
        pressure: 1000,
        humidity: 50,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      wind: {
        speed: 10,
        deg: 10,
      },
      clouds: {
        all: 0,
      },
      dt: 1598420000,
      sys: {
        type: 1,
        id: 807,
        country: 'AR',
        sunrise: 1598361201,
        sunset: 1598409901,
      },
      timezone: -10800,
      id: 3450956,
      name: 'Bariloche',
      cod: 200,
    }

    const { main, wind, weather } = weatherData
    const { temp, humidity, pressure } = main
    const { speed } = wind
    const { main: weatherMain, description, icon } = weather[0]
    const iconURL = `https://openweathermap.org/img/wn/${icon.replace(
      'n',
      'd',
    )}@2x.png`

    const parsedWeatherData = await parseWeatherData(weatherData)
    expect(parsedWeatherData).toEqual({
      items: [
        { description: 'Temperatura', value: temp, suffix: 'ºC' },
        { description: 'Humedad', value: humidity, suffix: '%' },
        { description: 'Presión', value: pressure, suffix: 'hPa' },
        { description: 'Viento', value: speed, suffix: 'm/s' },
        { description: 'Estado', value: weatherMain, suffix: '' },
        { description: 'Cielo', value: description, suffix: '' },
      ],
      icon: { url: iconURL, alt: `${weatherMain} ${description} ${temp}` },
    })
  })

  it('should return null if weatherData is null', async () => {
    const parsedWeatherData = await parseWeatherData(null)
    expect(parsedWeatherData).toEqual(null)
  })

  it('should return null if weatherData is empty', async () => {
    const parsedWeatherData = await parseWeatherData({})
    expect(parsedWeatherData).toEqual(null)
  })

  it('should return null if weatherData has invalid or has missing properties', async () => {
    const parsedWeatherData = await parseWeatherData({
      main: {},
      weather: [],
    })
    expect(parsedWeatherData).toEqual(null)
  })
})
