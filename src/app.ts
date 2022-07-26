import express from 'express'
import { Application } from 'express'
import clientsRouter from './routes/clients.routes'

class App {
  express: Application

  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json())
  }

  routes() {
    this.express.use('/client', clientsRouter)
  }

}

export default new App().express