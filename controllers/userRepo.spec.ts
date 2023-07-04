import { MockUserRepo } from "../repos/mock/mockUserRepo";

let userController: UserController;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

beforeEach(() => {
  userController = new UserController(
    new MockUserRepo() // Super Rapído! E válido, já que implementa IUserRepo.
  );
});

test("Should 200 with an empty array of users", async () => {
  let res = mockResponse();
  await userController.handleGetUsers(null, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ users: [] });
});
