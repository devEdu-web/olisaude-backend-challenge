import User from '../src/app/entities/User'

interface Health_Problem {
  name: string,
  degree: number
}

interface IHighRiskClient extends Omit<User, 'health_problems'>{
  ds: number,
  score: number
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
  getHighRisk(): Promise<unknown>
}

interface IHealthProblemRepository {
  update(healthProblemId: number, updateHealthProblemQuery: IUpdateHealthProblemQuery): Promise<IUpdatedHealthProblem>
}

interface IUpdateHealthProblemQuery {
  name?: string
  degree?: number
}

interface IUpdatedHealthProblem {
  id: number,
  name: string,
  degree: number,
  user: User
}