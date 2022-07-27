import { CreateClientController } from '../controllers/CreateClientController'
import { CreateClientService } from '../../services/CreateClientService'
import { ClientRepository } from '../../repositories/ClientRepository'


const clientRepository = new ClientRepository()

const createClientService = new CreateClientService(clientRepository)
const createClientController = new CreateClientController(createClientService)

export {
  createClientController
}