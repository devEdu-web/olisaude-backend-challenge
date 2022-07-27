import { Health_Problem } from "../../../types"

export class User {
  name: string
  birth_date: Date
  sex: string
  health_problems: Health_Problem[]
  
  constructor(name: string, birth_date: Date, sex: string, health_problems: Omit<Health_Problem[], 'user_id' | 'id'>) {
    this.name = name
    this.birth_date = birth_date
    this.sex = sex
    this.health_problems = health_problems
  }
}