import { CreateClientController } from '../controllers/CreateClientController'
import { GetClientsController } from '../controllers/GetClientsController'
import { GetClientController } from '../controllers/GetClientController'

import { ClientRepository } from '../../repositories/ClientRepository'

import { CreateClientService } from '../../services/CreateClientService'
import { GetClientsService } from '../../services/GetClientsService'
import { GetClientService } from '../../services/GetClientService'

const clientRepository = new ClientRepository()

const createClientService = new CreateClientService(clientRepository)
const getClientsService = new GetClientsService(clientRepository)
const getClientService = new GetClientService(clientRepository)

const createClientController = new CreateClientController(createClientService)
const getClientsController = new GetClientsController(getClientsService)
const getClientController = new GetClientController(getClientService)

export {
  createClientController,
  getClientsController,
  getClientController
}