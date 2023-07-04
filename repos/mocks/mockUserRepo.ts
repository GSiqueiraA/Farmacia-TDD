import { IUserRepo } from "../repos";

class MockUserRepo implements IUserRepo {
  private users: User[] = [];

  constructor() {}

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
