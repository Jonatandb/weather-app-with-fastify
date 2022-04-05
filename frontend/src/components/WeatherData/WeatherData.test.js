const { render } = require('@testing-library/react')
const { default: WeatherData } = require('./WeatherData')

describe('WeatherData', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <WeatherData
        isLoading={false}
        weatherData={{
          main: {
            temp: 10,
            humidity: 20,
            pressure: 30,
          },
          wind: {
            speed: 40,
          },
          weather: [
            {
              main: 'Clouds',
              description: 'scattered clouds',
            },
          ],
          dt: 1598784800,
          timezone: 3600,
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly when isLoading is true', () => {
    const { asFragment } = render(<WeatherData isLoading weatherData={{}} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly when weatherData is empty', () => {
    const { asFragment } = render(<WeatherData weatherData={{}} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
