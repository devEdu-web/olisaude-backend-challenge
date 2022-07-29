import { CreateClientController } from '../controllers/CreateClientController'
import { GetClientsController } from '../controllers/GetClientsController'
import { GetClientController } from '../controllers/GetClientController'
import { UpdateClientController } from '../controllers/UpdateClientController'
import { GetHighRiskClientsController } from '../controllers/GetHighRiskClientsController'

import { ClientRepository } from '../../repositories/ClientRepository'

import { CreateClientService } from '../../services/CreateClientService'
import { GetClientsService } from '../../services/GetClientsService'
import { GetClientService } from '../../services/GetClientService'
import { UpdateClientService } from '../../services/UpdateClientService'
import { GetHighRiskClientsService } from '../../services/GetHighRiskClientsService'

const clientRepository = new ClientRepository()

const createClientService = new CreateClientService(clientRepository)
const getClientsService = new GetClientsService(clientRepository)
const getClientService = new GetClientService(clientRepository)
const updateClientService = new UpdateClientService(clientRepository)
const getHighRiskClientsService = new GetHighRiskClientsService(clientRepository)

const createClientController = new CreateClientController(createClientService)
const getClientsController = new GetClientsController(getClientsService)
const getClientController = new GetClientController(getClientService)
const updateClientController = new UpdateClientController(updateClientService)
const getHighRiskClientsController = new GetHighRiskClientsController(getHighRiskClientsService)

export {
  createClientController,
  getClientsController,
  getClientController,
  updateClientController,
  getHighRiskClientsController
}