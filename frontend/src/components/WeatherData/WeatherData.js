import React from 'react'
import './WeatherData.css'
export default function WeatherData({ isLoading, weatherData }) {
  if (isLoading && weatherData && !Object.keys(weatherData).length)
    return <h2>Cargando datos del clima... ⏳</h2>
  if (!weatherData || !Object.keys(weatherData).length)
    return <h2>Error al obtener los datos del clima 💀</h2>

  const { main, wind, weather } = weatherData
  const { temp, humidity, pressure } = main
  const { speed } = wind
  const { main: weatherMain, description } = weather[0]

  const dt1000 = weatherData.dt * 1000
  const timezone1000 = weatherData.timezone * 1000
  const date = new Date(dt1000 - timezone1000).toLocaleDateString()
  const time = new Date(dt1000 - timezone1000 - 10000000).toLocaleTimeString()

  return (
    <div className='weatherData-Container'>
      <h4>{isLoading ? 'Cargando datos del clima... ⏳' : 'Datos del clima 🌡️'}</h4>
      <p className='dataRow'>{isLoading ? '' : `Temperatura actual: ${temp}ºC`}</p>
      <p className='dataRow'>{isLoading ? '' : `Humedad: ${humidity}%`}</p>
      <p className='dataRow'>{isLoading ? '' : `Presión: ${pressure}hPa`}</p>
      <p className='dataRow'>{isLoading ? '' : `Viento: ${speed}m/s`}</p>
      <p className='dataRow'>{isLoading ? '' : `Estado del cielo: ${weatherMain}`}</p>
      <p className='dataRow'>{isLoading ? '' : `Descripción del cielo: ${description}`}</p>
      <p className='dataRow'>{isLoading ? '' : `Fecha: ${date}`}</p>
      <p className='dataRow'>{isLoading ? '' : `Hora: ${time}`}</p>
    </div>
  )
}
