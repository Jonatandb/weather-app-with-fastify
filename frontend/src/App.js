import { useEffect, useState } from 'react'
import './App.css'
import CityName from './components/CityName/CityName'
import WeatherData from './components/WeatherData/WeatherData'

function App() {
  const [city, setCity] = useState('🏙')
  const [loadingCityName, setLoadingCityName] = useState(true)
  const [loadingCurrentWeatherData, setLoadingCurrentWeatherData] = useState(false)
  const [currentWeatherData, setCurrentWeatherData] = useState({})

  const getCityName = () => {
    return fetch('/v1/location')
      .then(res => {
        if (res.ok) return res.text()
        setLoadingCityName(false)
        return null
      })
      .then(res => {
        setLoadingCityName(false)
        if (res) return res
        return null
      })
      .catch(err => {
        setLoadingCityName(false)
        return null
      })
  }

  const getCurrentWeatherDataByCity = cityName => {
    const apiURL = `/v1/current/${cityName}`
    setLoadingCurrentWeatherData(true)
    return fetch(apiURL)
      .then(res => {
        if (res.ok) return res.json()
        setLoadingCurrentWeatherData(false)
        return null
      })
      .then(res => {
        setLoadingCurrentWeatherData(false)
        if (res) return res
        return null
      })
      .catch(err => {
        setLoadingCurrentWeatherData(false)
        return null
      })
  }

  useEffect(() => {
    getCityName().then(cityName => {
      setCity(cityName || 'Error al obtener la ciudad 💀')
    })
  }, [])

  useEffect(() => {
    if (city && city !== '🏙') {
      getCurrentWeatherDataByCity(city).then(weatherData => {
        setCurrentWeatherData(weatherData)
      })
    }
  }, [city])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          ☀️
          <br />
          WeatherApp - Fastify
        </h1>
        <CityName cityName={loadingCityName ? 'Cargando ciudad... ⏳' : city} />
        <WeatherData weatherData={currentWeatherData} isLoading={loadingCurrentWeatherData} />
        <a
          className='App-link Link-footer'
          href='https://github.com/Jonatandb'
          target='_blank'
          rel='noopener noreferrer'
        >
          Jonatandb
        </a>
      </header>
    </div>
  )
}

export default App
