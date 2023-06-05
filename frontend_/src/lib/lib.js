export const WeatherType = {
  Weather: 'current',
  Forecast: 'forecast',
}

const API_URL = process.env.REACT_APP_API_URL || ''

export const LOCATION_ENDPOINT = `${API_URL}/location`
export const CURRENT_WEATHER_ENDPOINT = `${API_URL}/current`
export const FORECAST_WEATHER_ENDPOINT = `${API_URL}/forecast`

export const getCityName = () => {
  return fetch(LOCATION_ENDPOINT)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res.text()
    })
    .then(cityName => {
      if (!cityName) throw new Error('Error getting city name')
      return cityName
    })
    .catch(err => {
      throw err
    })
}

export const getWeatherForecastDataByCity = (weatherType, cityName) => {
  if (!Object.values(WeatherType).includes(weatherType) || !cityName)
    return Promise.reject(null)
  let apiURL = `${CURRENT_WEATHER_ENDPOINT}/${cityName}`
  if (weatherType !== WeatherType.Weather) {
    apiURL = `${FORECAST_WEATHER_ENDPOINT}/${cityName}`
  }
  return fetch(apiURL)
    .then(res => res.json())
    .then(json => json)
    .catch(err => null)
}

export const parseWeatherData = weatherData => {
  if (!weatherData || !Object.keys(weatherData).length) return null
  try {
    const { main, wind, weather } = weatherData
    const { temp, humidity, pressure } = main
    const { speed } = wind
    const { main: weatherMain, description, icon } = weather[0]
    const iconURL = `https://openweathermap.org/img/wn/${icon.replace(
      'n',
      'd',
    )}@2x.png`

    return {
      items: [
        { description: 'Temperatura', value: temp, suffix: 'ºC' },
        { description: 'Humedad', value: humidity, suffix: '%' },
        { description: 'Presión', value: pressure, suffix: 'hPa' },
        { description: 'Viento', value: speed, suffix: 'm/s' },
        { description: 'Estado', value: weatherMain, suffix: '' },
        { description: 'Cielo', value: description, suffix: '' },
      ],
      icon: { url: iconURL, alt: `${weatherMain} ${description} ${temp}` },
    }
  } catch (error) {
    console.error('Error parsing weather data:', { weatherData, error })
    return null
  }
}
