import { Request, Response } from "express";
import { GetClientsService } from "../../services/GetClientsService";

export class GetClientsController {
  constructor(
    private GetClientsService: GetClientsService
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const users = await this.GetClientsService.execute()
      return res.json(users)
    } catch (error: any) {
      return res.json(error)
    }
  }
}