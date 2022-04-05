const knownLocalhostIPList = ['localhost', '127.0.0.1', '::1', '10.0.', '192.168']

const isIPLocalhost = ip => knownLocalhostIPList.some(local => ip.includes(local))

module.exports = {
  knownLocalhostIPList,
  isIPLocalhost,
}
