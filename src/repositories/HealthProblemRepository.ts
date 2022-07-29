import { IHealthProblemRepository, IUpdateHealthProblemQuery, IUpdatedHealthProblem } from '../../types/index'
import Client from '../database/Client'

export class HealthProblemRepository implements IHealthProblemRepository {
  async update(healthProblemId: number, updateHealthProblemQuery: IUpdateHealthProblemQuery): Promise<IUpdatedHealthProblem> {
    try {
      const updatedHealthProblem = await Client.health_Problem.update({
        where: {
          id: healthProblemId
        },
        data: updateHealthProblemQuery,
        select: {
          degree: true,
          name: true,
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              sex: true,
              birth_date: true,
            }
          }
        }
      })
      return updatedHealthProblem
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}