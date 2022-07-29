import { updateHealthProblemController } from '../app/controllers/index'
import { Router } from 'express'

const healthProblemRouter = Router()

healthProblemRouter.put('/update/:id', (req, res, next) => {
  return updateHealthProblemController.handle(req, res)
})

export default healthProblemRouter