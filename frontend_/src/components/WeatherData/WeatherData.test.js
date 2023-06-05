const { render, screen } = require('@testing-library/react')
const { default: WeatherData } = require('./WeatherData')

describe('WeatherData', () => {
  it('should render correctly', () => {
    const { container } = render(<WeatherData />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with data', () => {
    const weatherData = {
      main: {
        temp: 10,
        humidity: 10,
        pressure: 10,
      },
      wind: {
        speed: 10,
      },
      weather: [
        {
          main: 'main',
          description: 'description',
          icon: 'icon',
        },
      ],
    }
    const { container } = render(<WeatherData weatherData={weatherData} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with loading', () => {
    const { container } = render(<WeatherData isLoading />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with empty data', () => {
    const { container } = render(<WeatherData weatherData={{}} />)
    expect(container).toMatchSnapshot()
  })
})
