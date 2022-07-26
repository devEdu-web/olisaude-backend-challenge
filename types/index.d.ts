import { Health_Problem } from "@prisma/client"


interface IUpdateQuery {
  name?: string
  birth_date?: Date
  sex?: IUserSex
  health_problems: Omit<Health_Problem, 'user_id' | 'id'>

}

interface IUserRepository {
  create(user: User): Promise<User | IGeneralError>
  update(query: IUpdateQuery, id: number): Promise<User | IGeneralError>
  findById(id: number): Promise<User | null | IGeneralError>
  find(): Promise<User[] | IGeneralError>
}

interface IGeneralError {
  message: string
}