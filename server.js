const { build } = require('./app')

const start = async () => {
  try {
    const app = await build({ logger: true, ignoreTrailingSlash: true })
    await app.listen(process.env.PORT, '0.0.0.0')
    const address = app.server.address()
    console.log(`Server listening on http://localhost:${address.port}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
