import { ClientRepository } from "../repositories/ClientRepository";
import { IHighRiskClient } from '../../types/index'

export class GetHighRiskClientsService {
  constructor(
    private ClientRepository: ClientRepository
  ) {}
  
  async execute() {
    try {
      const highRiskUsers = await this.ClientRepository.getHighRisk()
      const userWithScore: IHighRiskClient[] = []
      const e = 2.71828

      highRiskUsers.forEach(user => {
        user.score = (1 / (1 + e ** -(-2.8 + Number(user.ds) ))) * 100
        userWithScore.push(user)
      })

      return userWithScore
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

}