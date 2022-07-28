import { CreateClientController } from '../controllers/CreateClientController'
import { GetClientsController } from '../controllers/GetClientsController'

import { ClientRepository } from '../../repositories/ClientRepository'

import { CreateClientService } from '../../services/CreateClientService'
import { GetClientsService } from '../../services/GetClientsService'

const clientRepository = new ClientRepository()

const createClientService = new CreateClientService(clientRepository)
const getClientsService = new GetClientsService(clientRepository)

const createClientController = new CreateClientController(createClientService)
const getClientsController = new GetClientsController(getClientsService)

export {
  createClientController,
  getClientsController
}