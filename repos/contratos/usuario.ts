import {usuario} from '../../entidades/usuario.ts';

export interface userRepos {
    createUser(user: user): Promise<user>;
    obterUser(): Promise<user[]>;
    obterLoginPorId(id: string): Promise<user | null>;
    atualizarUsuario(evento: Evento): Promise<user>;
    excluirUsuario(id: string): Promise<boolean>;
}
