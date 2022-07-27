import { Router } from "express";
import { createClientController } from '../app/controllers/index'
const clientsRouter = Router()

clientsRouter.post('/new', (req, res, next) => {
  return createClientController.handle(req, res)
})

export default clientsRouter