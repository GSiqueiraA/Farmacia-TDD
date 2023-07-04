/**
 * @interface IUserRepo
 * @desc Responsável por buscar usuários no banco de dados.
 **/
export interface IUserRepo {          // Exportado
  getUsers (): Promise<User[]>
}

class UserRepo implements IUserRepo { // Não é exportado
  constructor () {}

  getUsers (): Promise<User[]> {
    ...
  }
}
