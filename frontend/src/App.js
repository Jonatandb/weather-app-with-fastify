import { useEffect, useState } from 'react'
import './App.css'
import CityName from './components/CityName'

function App() {
  const [city, setCity] = useState('🏙')
  const [loadingCityName, setLoadingCityName] = useState(true)

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
  useEffect(() => {
    getCityName().then(cityName => {
      setCity(cityName || 'Error al obtener la ciudad 💀')
    })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          ☀️
          <br />
          WeatherApp - Fastify
        </h1>
        <CityName cityName={loadingCityName ? 'Cargando ciudad... ⏳' : city} />
        <a
          className='App-link'
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
