import {Evento} from '../repos/userRepo.ts';

export interface userRepos {
    createUser(user: user): Promise<user>;
    obterUser(): Promise<user[]>;
    obterLoginPorId(id: string): Promise<user | null>;
    atualizarUsuario(evento: Evento): Promise<user>;
    excluirUsuario(id: string): Promise<boolean>;
    save(id: string): Promise<user>;
}
