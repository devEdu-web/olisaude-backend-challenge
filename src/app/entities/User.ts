import { Health_Problem } from "@prisma/client"


export class User {
  name: string
  birth_date: Date
  sex: string
  health_problems: Omit<Health_Problem[], 'user_id' | 'id'>
  
  constructor(name: string, birth_date: Date, sex: string, health_problems: Omit<Health_Problem[], 'user_id' | 'id'>) {
    this.name = name
    this.birth_date = birth_date
    this.sex = sex
    this.health_problems = health_problems
  }
}