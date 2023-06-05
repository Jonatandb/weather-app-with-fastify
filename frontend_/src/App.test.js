const { render, screen } = require('@testing-library/react')
const { default: App } = require('./App')

describe('App', () => {
  it('should render correctly while loading', () => {
    render(<App />)
    expect(screen.getByText('☀️')).not.toBeNull()
    expect(screen.getByText('WeatherApp - Fastify')).not.toBeNull()
    expect(screen.getByText('🔎 Detectando ciudad...')).not.toBeNull()
    expect(screen.getByText('© Jonatandb - 2022')).not.toBeNull()
  })

  // it('should render correctly after loading', async () => {
  //   render(<App />)
  //   expect((await screen.findByText('🌃')) || (await screen.findByText('💀'))).toBeEnabled()
  //   Error: connect ECONNREFUSED 127.0.0.1:80...  https://stackoverflow.com/a/52508212/10752198
  // })
})
