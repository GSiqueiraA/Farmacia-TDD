import { IUserRepo } from "../repos/userRepo";
import { MockUserRepo } from "../repos/mock/mockUserRepo";

  describe('createUser', () => {
    test('deve criar um novo usuario', async () => {
      const createUser: user = { id: 1, login: 'johnDoe', password: 'secretpassword'};
      const newUser = await userRepo.createUser(id);
      expect(newUser).toEqual(createUser);
    });
    
  describe('LoginUseCase', () => {
    it('deve autenticar o cliente com sucesso', () => {
      const userRepository = new userRepo();
      const loginUseCase = new LoginUseCase(userRepo);

    // Simular um usuário válido
    const validUser = {
      id: '1',
      login: 'cliente',
      password: 'senha',
    };
    userRepository.save(validUser);

    // Executar o caso de uso
    const authenticatedUser = loginUseCase.execute('cliente', 'senha');

    // Verificar se o usuário foi autenticado com sucesso
    expect(authenticatedUser).toEqual(validUser);
  });

  it('deve lançar uma exceção quando as informações de login e senha forem inválidas', () => {
    const userRepository = new userRepo();
    const loginUseCase = new LoginUseCase(userRepo);

    // Executar o caso de uso com informações inválidas
    expect(() => loginUseCase.execute('usuario', 'senha')).toThrowError();
  });
});
