const { isIPLocalhost, knownLocalhostIPList } = require('../utils/utils')
const { getCityByRequest, getClientPublicIPByRequest, getLocationDataByIP } = require('./lib')

const exampledotcomIP = '192.0.43.10' // Domain: 'example.com' -> Location -> city: Anthony, country: United States

describe('getCityByRequest( request ) => city name', () => {
  it('should return city "Anthony" since the request has an IP in that location', async () => {
    const request = { ip: exampledotcomIP }
    const city = await getCityByRequest(request)
    expect(city).toBe('Anthony')
  })
})

describe('getClientPublicIPByRequest( req ) => returns the public client IP', () => {
  it('should return the public client IP whenever the request has an IP known as localhost', async () => {
    const allLocalhostIPWhereReplacedByAPublicIP = knownLocalhostIPList.every(async localhostIP => {
      const fakeRequestIP = localhostIP
      const request = { ip: fakeRequestIP }
      const ClientPublicIP = await getClientPublicIPByRequest(request)
      const result = isIPLocalhost(ClientPublicIP)
      return result
    })
    expect(allLocalhostIPWhereReplacedByAPublicIP).toBeTruthy()
  })
  it(`should return the same IP when the request has an IP which is not known as localhost.`, async () => {
    const fakeRequestIP = exampledotcomIP
    const request = { ip: fakeRequestIP }
    const ClientPublicIP = await getClientPublicIPByRequest(request)
    expect(ClientPublicIP).toBe(fakeRequestIP)
  })
})

describe('getLocationDataByIP( ip )', () => {
  it('should return the location data of the provided known IP', async () => {
    const locationData = await getLocationDataByIP(exampledotcomIP)
    expect(locationData).not.toBeNull()
    expect(locationData.city).toBe('Anthony')
    expect(locationData.country).toBe('United States')
  })
})
