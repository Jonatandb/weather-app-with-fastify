import React from 'react'
import './WeatherData.css'
export default function WeatherData({ isLoading, weatherData }) {
  if (isLoading) return <div>⏳ Cargando datos del clima... </div>
  if (!weatherData || !Object.keys(weatherData).length) return null

  const { main, wind, weather } = weatherData
  const { temp, humidity, pressure } = main
  const { speed } = wind
  const { main: weatherMain, description } = weather[0]

  const iconURL = `https://openweathermap.org/img/wn/${weather[0].icon.replace('n', 'd')}@2x.png`

  return (
    <div className='WeatherData-Container'>
      <h4 className='WeatherData-Title'>Datos del clima 🌡️</h4>
      <div className='WeatherData-Details-Container'>
        <div className='WeatherData-Image-Container'>
          <img src={iconURL} alt={`${weather[0].description} ${weatherData.main.temp} `}></img>
        </div>
        <div className='WeatherData-Rows-Container'>
          <div className='WeatherData-Row'>
            <p>Temperatura:</p>
            <p>{`${temp}ºC`}</p>
          </div>
          <div className='WeatherData-Row'>
            <p>Humedad: </p>
            <p>{`${humidity}%`}</p>
          </div>
          <div className='WeatherData-Row'>
            <p>Presión: </p>
            <p>{`${pressure}hPa`}</p>
          </div>
          <div className='WeatherData-Row'>
            <p>Viento: </p>
            <p>{`${speed}m/s`}</p>
          </div>
          <div className='WeatherData-Row'>
            <p>Estado: </p>
            <p>{`${weatherMain}`}</p>
          </div>
          <div className='WeatherData-Row'>
            <p>Cielo: </p>
            <p>{`${description}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
