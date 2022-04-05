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

  test('renders without crashing with empty cityName', () => {
    const cityName = ''
    const { container } = render(<CityName cityName={cityName} />)
    expect(container).toHaveTextContent('🌃')
  })
})
