import { IUpdateQuery } from "../../types";
import { ClientRepository } from "../repositories/ClientRepository";

export class UpdateClientService {
  constructor(
    private ClientRepository: ClientRepository
  ) {} 

  async execute(updateQuery: IUpdateQuery, id: number) {
    if(updateQuery.birth_date) {
      updateQuery.birth_date = new Date(updateQuery.birth_date)
    }
    try {
      const userUpdated = await this.ClientRepository.update(updateQuery, id)
      return userUpdated
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

}