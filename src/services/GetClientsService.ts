import { ClientRepository } from '../repositories/ClientRepository'

export class GetClientsService {
  constructor(
    private ClientRepository: ClientRepository
  ) {}

  async execute() {
    try {
      const users = await this.ClientRepository.find()
      return users
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}