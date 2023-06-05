import { parseWeatherData } from '../../lib/lib'
import SpinningIcon from '../SpinningIcon/SpinningIcon'
import './WeatherData.css'

export default function WeatherData({ isLoading, weatherData }) {
  const processedWeatherData = parseWeatherData(weatherData)
  return (
    <div className='WeatherData-Container'>
      {isLoading ? (
        <div className='WeatherData-LoadingMessage'>
          <SpinningIcon speed='fast'>⏳</SpinningIcon>{' '}
          <p>Cargando datos del clima...</p>
        </div>
      ) : processedWeatherData ? (
        <>
          <h4 className='WeatherData-Title'>Datos del clima 🌡️</h4>
          <div className='WeatherData-Details-Container'>
            <div className='WeatherData-Image-Container'>
              <img
                src={processedWeatherData.icon.url}
                alt={processedWeatherData.icon.alt}
              />
            </div>
            <div className='WeatherData-Rows-Container'>
              {processedWeatherData.items.map(
                ({ description, value, suffix }) => (
                  <div className='WeatherData-Row' key={description}>
                    <p>{description}:</p>
                    <p>{`${value} ${suffix}`}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </>
      ) : (
        <div>{/* Datos inválidos... */}</div>
      )}
    </div>
  )
}
