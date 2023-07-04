import { IUserRepo } from "../repos"; // Muito Melhor!

/**
 * @class UserController
 * @desc Responsável por lidar com solicitações de API para a rota /user
 **/

class UserController {
  private userRepo: IUserRepo; // Mudados Aqui

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo; // E Aqui Também
  }

  async handleGetUsers(req, res): Promise<void> {
    const users = await this.userRepo.getUsers();
    return res.status(200).json({ users });
  }
}
