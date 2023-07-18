import { IUserRepo } from "../repos"; 
import { Request, Response } from 'express';

/**
 * @class UserController
 * @desc Responsável por lidar com solicitações de API para a rota /user
 **/

class UserController {
  private userRepo: IUserRepo; 

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async handleGetUsers(req, res): Promise<void> {
    const users = await this.userRepo.getUsers();
    return res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ error: 'Erro' });
    }
  }
