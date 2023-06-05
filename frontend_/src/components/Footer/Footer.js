import React, { useMemo } from 'react'
import { getRandomCitiesList } from '../../utils/utils'
import './Footer.css'

const Footer = ({ selectCity }) => {
  const randomCitiesList = useMemo(() => getRandomCitiesList(5), [])
  return (
    <>
      <div className='Footer-links'>
        {randomCitiesList.map(city => (
          <p
            key={city}
            onClick={() => selectCity && typeof selectCity === 'function' && selectCity(city)}
            role='button'
          >
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

export default React.memo(Footer)
