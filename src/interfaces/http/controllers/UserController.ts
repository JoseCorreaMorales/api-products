import { Request, Response } from 'express';
import { UserRepository } from '../../../domain/repositories/UserRepository';

export class UserController {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const user = await this.userRepository.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, role } = req.body
      if (!name || !role) {
        res.json({ error: "Name and role are required" })
        return
      }
      const user = await this.userRepository.save({ name, role })
      res.status(201).json({ message: "Created" })
    } catch (error) {
      res.status(500).json({message: "error"})
    }
  }



  async test(req: Request, res: Response): Promise<void> {
    res.json({ test: "hello" })
  }
}
