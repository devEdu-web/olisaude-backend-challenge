import express from 'express'
import { Application } from 'express'
import clientsRouter from './routes/clients.routes'
import healthProblemRouter from './routes/healthProblems.routes'

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
    this.express.use('/clients', clientsRouter)
    this.express.use('/health_problems', healthProblemRouter)
  }

}

export default new App().express