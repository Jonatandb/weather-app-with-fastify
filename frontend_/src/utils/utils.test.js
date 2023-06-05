const { getRandomCitiesList } = require('./utils')

describe('Utils', () => {
  it('getRandomCitiesList should return an array of 1 cities when it is called whitout quantity param', () => {
    const fivecities = getRandomCitiesList()
    expect(fivecities.length).toBe(1)
  })

  it('getRandomCitiesList should return an array of 5 cities', () => {
    const fivecities = getRandomCitiesList(5)
    expect(fivecities.length).toBe(5)
  })
})
