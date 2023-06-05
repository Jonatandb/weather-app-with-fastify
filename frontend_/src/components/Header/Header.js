import SpinningIcon from '../SpinningIcon/SpinningIcon'
import './Header.css'

export default function Header() {
  return (
    <header>
      <SpinningIcon
        speed='medium'
        style={{ fontSize: '2em', marginTop: '15px', marginBottom: '-30px' }}
      >
        ☀️
      </SpinningIcon>
      <h1 className='Header-title'>WeatherApp - Fastify</h1>
    </header>
  )
}
