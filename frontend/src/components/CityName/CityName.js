import './CytiName.css'

export default function CityName({ isLoading, cityName }) {
  if (isLoading) return <div className='CityName-LoadingMessage'>🔎 Detectando ciudad... </div>
  if (!cityName) return null

  return <h2 className='CityName-Title'>{cityName}&nbsp;&#127747;</h2>
}
