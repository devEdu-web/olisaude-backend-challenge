import { User } from '../app/entities/User'
import { IUpdateQuery, IUserRepository, IGeneralError } from '../../types'
import Client from '../app/database/Client'

export class UserRepository implements IUserRepository {
  async create(user: User): Promise<User | IGeneralError> {
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
          name: true,
          birth_date: true,
          sex: true,
          health_problems: true
        }
      })

      return user

    } catch (error: any) {
      return {
        message: error.message
      }
    }
  }

  async update(query: IUpdateQuery, id: number): Promise<User | IGeneralError> {
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
      return {
        message: error.message
      }
    }
  }

  async findById(id: number): Promise<User | null | IGeneralError> {
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
      return {
        message: error.message
      }
    }
  }

  async find(): Promise<User[] | IGeneralError> {
    try {
      const users = await Client.user.findMany({
        include: {
          health_problems: true
        }
      })
      return users
    } catch (error: any) {
      return {
        message: error.message
      }
    }
  }

}

