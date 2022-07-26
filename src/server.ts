import http from 'node:http'
import app from './app'

const PORT = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
})