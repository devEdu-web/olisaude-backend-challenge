import { Request, Response } from "express";
import { UpdateHealthProblemService } from "../../services/UpdateHealthProblemService";

export class UpdateHealthProblemController {
  constructor(
    private UpdateHealthProblemService: UpdateHealthProblemService
  ) {}

  async handle(req: Request, res: Response) {
    const updateQuery = req.body
    const { id } = req.params
    try {
      const updatedHealthProblem = await this.UpdateHealthProblemService.execute(Number(id), updateQuery)
      return res.status(201).json(updatedHealthProblem)
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  }

}