import { User } from '../app/entities/User'
import { IUpdateQuery, IClientRepository } from '../../types/index'
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

  async update(query: IUpdateQuery, id: number): Promise<User> {
    try {
      const user = await Client.user.update({
        where: {
          id
        },
        data: query,
        select: {
          name: true,
          birth_date: true,
          sex: true,
          health_problems: true
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
          health_problems: true
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
              degree: true
            }
          }
        }
      })
      return users
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

}

