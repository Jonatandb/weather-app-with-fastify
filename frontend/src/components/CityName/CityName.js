import './CytiName.css'

export default function CityName({ isLoading, cityName }) {
  const title = isLoading
    ? '🔎 Detectando ciudad...'
    : cityName + ' ' + String.fromCodePoint(127747)
  return <h2 className='CityName-Title'>{title}</h2>
}
