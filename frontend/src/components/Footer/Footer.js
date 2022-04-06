import { useMemo } from 'react'
import './Footer.css'

const citiesOfTheWorld = [
  'Barcelona',
  'Quito',
  'San Pablo',
  'Reykjavik',
  'Qatar',
  'Tokyo',
  'Beijing',
  'Cairo',
  'Mumbai',
  'Mexico City',
  'Delhi',
  'Shanghai',
  'Jakarta',
]
export default function Footer({ selectCity }) {
  const getfivecities = useMemo(() => {
    const fivecities = []
    for (let i = 0; i < 5; i++) {
      const randomCity = citiesOfTheWorld[Math.floor(Math.random() * citiesOfTheWorld.length)]
      if (!fivecities.includes(randomCity)) {
        fivecities.push(randomCity)
      } else {
        i--
      }
    }
    return fivecities
  }, [])

  return (
    <>
      <div className='Footer-links'>
        {getfivecities.map(city => (
          <p key={city} onClick={() => selectCity(city)}>
            {city}
          </p>
        ))}
      </div>
      <a
        className='Footer-author'
        href='https://github.com/Jonatandb'
        target='_blank'
        rel='noopener noreferrer'
      >
        © Jonatandb - 2022
      </a>
    </>
  )
}
