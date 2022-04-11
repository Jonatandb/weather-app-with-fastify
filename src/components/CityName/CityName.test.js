import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import CityName from './CityName'

describe('CityName', () => {
  test('renders without crashing', () => {
    const cityName = 'Ciudad de prueba'
    const { container } = render(<CityName cityName={cityName} />)
    expect(container).toHaveTextContent(cityName)
  })

  test('renders loading message', () => {
    const { container } = render(<CityName isLoading />)
    expect(container).toHaveTextContent('🔎 Detectando ciudad...')
  })

  test('renders only 🌃 if cityName is not provided', () => {
    const { container } = render(<CityName />)
    expect(container).toHaveTextContent('🌃')
  })

  test('renders only 🌃 if cityName is empty', () => {
    const { container } = render(<CityName cityName='' />)
    expect(container).toHaveTextContent('🌃')
  })
})
