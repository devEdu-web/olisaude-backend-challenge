import { Request, Response } from "express";
import { CreateClientService } from "../../services/CreateClientService";
import { User } from "../entities/User";

export class CreateClientController {
  constructor(
    private CreateClientService: CreateClientService
  ) {}
  async handle(req: Request, res: Response) {
    const { name, birth_date, sex, health_problems } = req.body
    const newUser = new User(name, new Date(birth_date), sex, health_problems)

    try {
      const userSaved = await this.CreateClientService.execute(newUser)
      return res.status(201).json(userSaved)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }
}