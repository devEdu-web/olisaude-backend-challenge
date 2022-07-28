import { Request, Response } from "express";
import { GetClientService } from "../../services/GetClientService";

export class GetClientController {
  constructor(
    private GetClientService: GetClientService
  ) {}
  async handle(req: Request, res: Response) {
    const id = req.params.id
    try {
      const user = await this.GetClientService.execute(Number(id))
      res.json(user)
    } catch (error) {
      
    }
  }
}