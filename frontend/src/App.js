import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CityName from './components/CityName/CityName'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import WeatherData from './components/WeatherData/WeatherData'
import ForecastData from './components/ForecastData/ForecastData'
import Footer from './components/Footer/Footer'
import {
  getCityName,
  getWeatherForecastDataByCity,
  WeatherType,
} from './lib/lib'

function App() {
  const [cityName, setCityName] = useState('')
  const [loadingCityName, setLoadingCityName] = useState(true)
  const [errorGettingData, setErrorGettingData] = useState(false)
  const [loadingWeatherData, setLoadingWeatherData] = useState(false)
  const [loadingForecastData, setLoadingForecastData] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    getCityName()
      .then(setCityName)
      .catch(() => {
        console.error('No se pudo obtener el nombre de la ciudad 🤷‍♂️')
        setErrorGettingData(true)
      })
      .finally(() => setLoadingCityName(false))
  }, [])

  useEffect(() => {
    if (cityName && !loadingCityName) {
      setErrorGettingData(false)
      setLoadingWeatherData(true)
      setLoadingForecastData(true)

      Promise.all([
        getWeatherForecastDataByCity(WeatherType.Weather, cityName),
        getWeatherForecastDataByCity(WeatherType.Forecast, cityName),
      ])
        .then(([weatherDataResult, forecastDataResult]) => {
          if (!weatherDataResult)
            throw new Error(
              'Error getting weather data for city: ' + cityName || '',
            )

          if (!forecastDataResult)
            throw new Error(
              'Error getting forecast data for city: ' + cityName || '',
            )

          setWeatherData(weatherDataResult)
          setForecastData(forecastDataResult)
        })
        .catch(error => {
          console.error(error)
          setErrorGettingData(true)
          setWeatherData(null)
          setForecastData(null)
        })
        .finally(() => {
          setLoadingWeatherData(false)
          setLoadingForecastData(false)
        })
    }
  }, [cityName, loadingCityName])

  return (
    <div className='App'>
      <div className='App-container'>
        <Header />
        <CityName isLoading={loadingCityName} cityName={cityName} />
        {errorGettingData || loadingCityName ? (
          <ErrorMessage
            msg={errorGettingData && 'Error al obtener los datos 💀'}
          />
        ) : (
          <>
            <WeatherData
              weatherData={weatherData}
              isLoading={loadingWeatherData}
            />
            <ForecastData
              forecastData={forecastData}
              isLoading={loadingForecastData}
            />
          </>
        )}
        <Footer selectCity={setCityName} />
      </div>
    </div>
  )
}

export default App
