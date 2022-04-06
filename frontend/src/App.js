import { useEffect, useState } from 'react'
import './App.css'
import CityName from './components/CityName/CityName'
import Footer from './components/Footer/Footer'
import ForecastData from './components/ForecastData/ForecastData'
import WeatherData from './components/WeatherData/WeatherData'

const WeatherType = {
  Weather: 'current',
  Forecast: 'forecast',
}

const errorGettingCityMessage = 'Error al obtener la ciudad 💀'

function App() {
  const [city, setCity] = useState('')
  const [loadingCityName, setLoadingCityName] = useState(true)
  const [loadingWeatherData, setLoadingWeatherData] = useState(false)
  const [loadingForecastData, setLoadingForecastData] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  const getCityName = () => {
    return fetch('/v1/location')
      .then(res => res.text())
      .then(text => text)
      .catch(err => null)
  }

  const getWeatherForecastDataByCity = (weatherType, cityName) => {
    const apiURL = `/v1/${weatherType}/${cityName}`
    return fetch(apiURL)
      .then(res => res.json())
      .then(json => json)
      .catch(err => null)
  }

  useEffect(() => {
    async function getInitialData() {
      const cityNameResult = await getCityName()
        .then(cityName => cityName)
        .catch(err => null)
      setLoadingCityName(false)
      setCity(cityNameResult || errorGettingCityMessage)
    }
    getInitialData()
  }, [])

  useEffect(() => {
    if (city && city !== errorGettingCityMessage && !loadingCityName) {
      async function getWeatherDataByCity() {
        setLoadingWeatherData(true)
        const weatherDataResult = await getWeatherForecastDataByCity(WeatherType.Weather, city)
        setLoadingWeatherData(false)
        setWeatherData(weatherDataResult || null)
      }
      getWeatherDataByCity()

      async function getForecastDataByCity() {
        setLoadingForecastData(true)
        const forecastDataResult = await getWeatherForecastDataByCity(WeatherType.Forecast, city)
        setLoadingForecastData(false)
        setForecastData(forecastDataResult || null)
      }

      getForecastDataByCity()
    }
  }, [city, loadingCityName])

  return (
    <div className='App'>
      <div className='App-header'>
        <header>
          <h1>
            ☀️
            <br />
            WeatherApp - Fastify
          </h1>
        </header>
        <CityName isLoading={loadingCityName} cityName={city} />
        <WeatherData weatherData={weatherData} isLoading={loadingWeatherData} />
        <ForecastData forecastData={forecastData} isLoading={loadingForecastData} />
        <Footer selectCity={setCity} />
      </div>
    </div>
  )
}

export default App
