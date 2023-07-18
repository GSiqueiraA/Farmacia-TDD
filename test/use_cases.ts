import { IUserRepo } from "../repos/userRepo";
import { MockUserRepo } from "../repos/mock/mockUserRepo";
import {Evento} from '../repos/userRepos';
import { Response } from "express";


  describe('createUser', () => {
    test('deve criar um novo usuario', async () => {
      const createUser: user = { id: 1, login: 'johnDoe', password: 'secretpassword'};
      const newUser = await userRepo.createUser(id);
      expect(newUser).toEqual(createUser);
    });

  }
