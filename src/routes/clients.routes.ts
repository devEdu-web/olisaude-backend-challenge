import { Router } from "express";
import { createClientController, getClientsController, getClientController, updateClientController, getHighRiskClientsController } from '../app/controllers/index'
const clientsRouter = Router()

clientsRouter.post('/new', (req, res, next) => {
  return createClientController.handle(req, res)
})

clientsRouter.get('/all', (req, res, next) => {
  return getClientsController.handle(req, res)
})

clientsRouter.get('/client/:id', (req, res, next) => {
  return getClientController.handle(req, res)
})

clientsRouter.get('/high_risk', (req, res, next) => {
  return getHighRiskClientsController.handle(req, res)
})

clientsRouter.put('/update/:id', (req, res, next) => {
  return updateClientController.handle(req, res)
})

export default clientsRouter