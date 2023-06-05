const { render, screen } = require('@testing-library/react')
const { default: Header } = require('./Header')

describe('Header', () => {
  it('should render icon and main title', () => {
    render(<Header />)
    expect(screen.getByText('☀️')).toBeDefined()
    expect(screen.getByText('WeatherApp - Fastify')).toBeDefined()
  })
})
