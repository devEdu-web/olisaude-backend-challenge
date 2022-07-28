import { Request, Response } from "express";
import { UpdateClientService } from "../../services/UpdateClientService";

export class UpdateClientController {
  constructor(
    private UpdateClientService: UpdateClientService
  ) {}

  async handle(req: Request, res: Response) {
    const updateQuery = req.body
    const { id } = req.params
    try {
      const updatedClient = await this.UpdateClientService.execute(updateQuery, Number(id))
      return res.status(201).json(updatedClient)
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  }

}