import { User } from "../app/entities/User";
import { ClientRepository } from "../repositories/ClientRepository";

export class CreateClientService {
  constructor(
    private ClientRepository: ClientRepository
  ) {}

  async execute(user: User) {
    try {
      const userSaved = await this.ClientRepository.create(user)
      return userSaved
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
  
}