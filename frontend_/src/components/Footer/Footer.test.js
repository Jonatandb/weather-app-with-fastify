import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
  it('should render correctly 5 city buttons and one author link', async () => {
    render(<Footer />)
    expect(screen.getAllByRole('button')).toHaveLength(5)
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('should call selectCity on city name click', async () => {
    const selectCity = jest.fn()
    render(<Footer selectCity={selectCity} />)
    const cityButtons = screen.getAllByRole('button')
    cityButtons[0].click()
    expect(selectCity).toHaveBeenCalledTimes(1)
    expect(selectCity).toHaveBeenCalledWith(cityButtons[0].textContent)
  })

  it('shouldnt fail if selectCity is not a function', async () => {
    render(<Footer />)
    const cityButtons = screen.getAllByRole('button')
    expect(() => {
      cityButtons[0].click()
    }).not.toThrow()
  })
})
