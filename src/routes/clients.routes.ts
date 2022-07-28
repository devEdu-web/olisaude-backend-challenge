import { Router } from "express";
import { createClientController, getClientsController } from '../app/controllers/index'
const clientsRouter = Router()

clientsRouter.post('/new', (req, res, next) => {
  return createClientController.handle(req, res)
})

clientsRouter.get('/all', (req, res, next) => {
  return getClientsController.handle(req, res)
})

export default clientsRouter