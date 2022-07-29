import { IUpdateHealthProblemQuery } from "../../types";
import { HealthProblemRepository } from "../repositories/HealthProblemRepository";

export class UpdateHealthProblemService {
  constructor(
    private HealthProblemRepository: HealthProblemRepository
  ) {}
  async execute(healthProblemId: number, updateHealthProblemQuery: IUpdateHealthProblemQuery) {
    try {
      const updatedHealthProblem = await this.HealthProblemRepository.update(healthProblemId, updateHealthProblemQuery)
      return updatedHealthProblem
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}