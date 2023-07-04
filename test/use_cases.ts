import { IUserRepo } from "../repos";
import { MockUserRepo } from "../repos/mock/mockUserRepo";

  describe('createUser', () => {
    test('deve criar um novo usuario', async () => {
    
      const createUser: user = { id: 1, nome: 'johnDoe', password: 'secretpassword'};

      const newUser = await userRepo.createUser(id);

      expect(newUser).toEqual(createUser);
    });
