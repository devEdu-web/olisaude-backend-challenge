import { User } from '../app/entities/User'
import { IUpdateQuery, IClientRepository, IHighRiskClient } from '../../types/index'
import Client from '../database/Client'



export class ClientRepository implements IClientRepository {
  async create(user: User): Promise<User> {
    const { name, sex, birth_date, health_problems } = user

    try {
      const user = await Client.user.create({
        data: {
          name, 
          sex,
          birth_date,
          health_problems: {
            create: health_problems
          }
        },
        select: {
          id: true,
          name: true,
          birth_date: true,
          sex: true,
          health_problems: {
            select: {
              name: true,
              degree: true,
              id: true
            }
          }
        }
      })

      return user

    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async update(updateQuery: IUpdateQuery, id: number): Promise<User> {
    try {
      const user = await Client.user.update({
        where: {
          id
        },
        data: updateQuery,
        select: {
          name: true,
          birth_date: true,
          sex: true,
          health_problems: {
            select: {
              name: true,
              degree: true
            }
          }
        }
      })
      return user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async findById(id: number): Promise<User | null> {
    try {
      const user = Client.user.findUnique({
        where: {
          id
        },
        include: {
          health_problems: {
            select: {
              degree: true,
              name: true,
              id: true
            }
          }
        }
      })
      return user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async find(): Promise<User[]> {
    try {
      const users = await Client.user.findMany({
        include: {
          health_problems: {
            select: {
              name: true,
              degree: true,
              id: true
            }
          }
        }
      })
      return users
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getHighRisk(): Promise<IHighRiskClient[]> {
    try {

      // Given that the ds (degree sum) is directly proportional to the score (risk), if we
      // get the users with the greatest degree sums, we will be getting the users with the greatest health risk

      const highRiskUsers: IHighRiskClient[] = await Client.$queryRaw`select User.id, User.name, User.sex, User.birth_date, sum(Health_Problem.degree) as ds from User inner join Health_Problem on User.id = Health_Problem.user_id group by Health_Problem.user_id order by ds desc limit 10;`

      return highRiskUsers
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

}

