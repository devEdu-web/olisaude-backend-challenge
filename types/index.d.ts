import User from '../src/app/entities/User'

interface Health_Problem {
  name: string,
  degree: number
}

interface IUpdateQuery {
  name?: string
  birth_date?: Date
  sex?: IUserSex
  health_problems: Health_Problem

}

interface IClientRepository {
  create(user: User): Promise<User>
  update(updatedUser: Partial<User>, id: number): Promise<User>
  findById(id: number): Promise<User | null>
  find(): Promise<User[]>
}
