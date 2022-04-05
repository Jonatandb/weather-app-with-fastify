const { isIPLocalhost } = require('./utils')

describe('isIPLocalhost( ip )', () => {
  it("should return true for known localhost IP's", () => {
    expect(isIPLocalhost('localhost')).toBeTruthy()
    expect(isIPLocalhost('127.0.0.1')).toBeTruthy()
    expect(isIPLocalhost('::1')).toBeTruthy()
    expect(isIPLocalhost('10.0.')).toBeTruthy()
    expect(isIPLocalhost('192.168')).toBeTruthy()
  })
  it("should return false for IP's not known as localhost", async () => {
    expect(isIPLocalhost('differentHostName')).toBeFalsy()
    expect(isIPLocalhost('127.0.0.4')).toBeFalsy()
    expect(isIPLocalhost('::5')).toBeFalsy()
    expect(isIPLocalhost('82.144.1.45')).toBeFalsy()
  })
})
