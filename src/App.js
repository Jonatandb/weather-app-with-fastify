import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CityName from './components/CityName/CityName'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import WeatherData from './components/WeatherData/WeatherData'
import ForecastData from './components/ForecastData/ForecastData'
import Footer from './components/Footer/Footer'
import { getCityName, getWeatherForecastDataByCity, WeatherType } from './lib/lib'

function App() {
  const [cityName, setCityName] = useState('')
  const [loadingCityName, setLoadingCityName] = useState(true)
  const [errorGettingData, setErrorGettingData] = useState(false)
  const [loadingWeatherData, setLoadingWeatherData] = useState(false)
  const [loadingForecastData, setLoadingForecastData] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    async function getCity() {
      getCityName()
        .then(locationCityName => {
          if (!locationCityName) throw new Error('No se pudo obtener el nombre de la ciudad 🤷‍♂️')
          setCityName(locationCityName)
          setLoadingCityName(false)
        })
        .catch(err => {
          console.error(err)
          setErrorGettingData(true)
          setLoadingCityName(false)
        })
    }
    getCity()
  }, [])

  useEffect(() => {
    if (cityName && !loadingCityName) {
      async function getWeatherDataByCity() {
        setLoadingWeatherData(true)
        const weatherDataResult = await getWeatherForecastDataByCity(WeatherType.Weather, cityName)
        setLoadingWeatherData(false)
        if (weatherDataResult) {
          setWeatherData(weatherDataResult)
        } else {
          console.error('Error getting weather data for city:', cityName)
          setCityName('')
          setErrorGettingData(true)
          setWeatherData(null)
          setForecastData(null)
        }
      }

      async function getForecastDataByCity() {
        setLoadingForecastData(true)
        const forecastDataResult = await getWeatherForecastDataByCity(
          WeatherType.Forecast,
          cityName
        )
        setLoadingForecastData(false)
        if (forecastDataResult) {
          setForecastData(forecastDataResult)
        } else {
          console.error('Error getting forecast data for city:', cityName)
          setCityName('')
          setErrorGettingData(true)
          setWeatherData(null)
          setForecastData(null)
        }
      }
      setErrorGettingData(false)
      getWeatherDataByCity()
      getForecastDataByCity()
    }
  }, [cityName, loadingCityName, errorGettingData])

  return (
    <div className='App'>
      <div className='App-container'>
        <Header />
        <CityName isLoading={loadingCityName} cityName={cityName} />
        {errorGettingData || loadingCityName ? (
          <ErrorMessage msg={errorGettingData && 'Error al obtener los datos 💀'} />
        ) : (
          <>
            <WeatherData weatherData={weatherData} isLoading={loadingWeatherData} />
            <ForecastData forecastData={forecastData} isLoading={loadingForecastData} />
          </>
        )}
        <Footer selectCity={setCityName} />
      </div>
    </div>
  )
}

export default App
