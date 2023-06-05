const { render, screen } = require('@testing-library/react')
const { default: App } = require('./App')

describe('index.test.js', () => {
  it('should render the App', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /WeatherApp/i })).not.toBeNull()
  })
})
