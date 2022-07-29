import { Response, Request } from "express";
import { GetHighRiskClientsService } from "../../services/GetHighRiskClientsService";

export class GetHighRiskClientsController {
  constructor(
    private GetHighRiskClientsService: GetHighRiskClientsService
  ) {}
  
  async handle(req: Request, res: Response) {
    try {
      const users = await this.GetHighRiskClientsService.execute()
      res.json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  }

}