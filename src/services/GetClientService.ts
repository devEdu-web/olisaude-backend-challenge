import { ClientRepository } from "../repositories/ClientRepository";

export class GetClientService {
  constructor(
    private ClientRepository: ClientRepository
  ) {}

  async execute(id: number) {
    try {
      const user = await this.ClientRepository.findById(id)
      return user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}