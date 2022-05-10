import SpinningIcon from '../SpinningIcon/SpinningIcon'
import './ForecastData.css'

export default function ForecastData({ forecastData, isLoading }) {
  if (isLoading)
    return (
      <div className='ForecastData-LoadingMessage'>
        <SpinningIcon speed='fast'>⏳</SpinningIcon> Cargando pronóstico...{' '}
      </div>
    )
  if (!forecastData || !Object.keys(forecastData).length) return null

  const processedData = forecastData.list.reduce((acc, curr) => {
    const date = new Date(curr.dt_txt.split(' ')[0]).toLocaleDateString('es-AR')
    if (Object.keys(acc).length === 5 && !acc[date]) return acc
    if (!acc[date]) {
      acc[date] = {
        icon: `https://openweathermap.org/img/wn/${curr.weather[0].icon.replace('n', 'd')}.png`,
        temp_min: curr.main.temp_min,
        temp_max: curr.main.temp_max,
      }
    } else {
      acc[date] = {
        ...acc[date],
        temp_min: Math.min(acc[date].temp_min, curr.main.temp_min),
        temp_max: Math.max(acc[date].temp_max, curr.main.temp_max),
      }
    }
    return acc
  }, {})

  return (
    <div className='ForecastData-Container'>
      {processedData &&
        Object.keys(processedData).map(date => {
          const { icon, temp_min, temp_max } = processedData[date]
          return (
            <div className='ForecastData-Cell' key={date}>
              <div className='ForecastData-Cell-Date'>{date}</div>
              <div className='ForecastData-Cell-IconContainer'>
                <img
                  className='ForecastData-Cell-Icon'
                  src={icon}
                  alt={`${date} min: ${temp_min}° / max: ${temp_max}`}
                />
              </div>
              <div className='ForecastData-Cell-Temp'>
                {temp_min}° / {temp_max}°
              </div>
            </div>
          )
        })}
    </div>
  )
}
