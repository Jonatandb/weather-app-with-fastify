const { render } = require('@testing-library/react')
const { default: ForecastData } = require('./ForecastData')

describe('ForecastData', () => {
  it('should render correctly', () => {
    const forecastData = {
      list: [
        {
          dt_txt: '2020-04-01 00:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-01 12:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-01 18:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
      ],
    }
    const { container } = render(<ForecastData forecastData={forecastData} isLoading={false} />)
    expect(container).toMatchSnapshot()
  })

  it('should render no more than 5 days', () => {
    const forecastData = {
      list: [
        {
          dt_txt: '2020-04-01 00:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-02 12:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-03 18:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-04 18:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-05 18:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-06 12:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-06 13:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
        {
          dt_txt: '2020-04-06 14:00:00',
          main: {
            temp_min: 10,
            temp_max: 20,
          },
          weather: [
            {
              icon: '01d',
            },
          ],
        },
      ],
    }
    const { container } = render(<ForecastData forecastData={forecastData} isLoading={false} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when isLoading is true', () => {
    const { container } = render(<ForecastData forecastData={null} isLoading={true} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when forecastData is null', () => {
    const { container } = render(<ForecastData forecastData={null} isLoading={false} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when forecastData is null and isLoading is true', () => {
    const { container } = render(<ForecastData forecastData={null} isLoading={true} />)
    expect(container).toMatchSnapshot()
  })
})
