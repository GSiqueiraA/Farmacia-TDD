import {usuario} from '../../entidades/usuario';

export interface usuarioRepos {
    criarUsuario(usuario: usuario): Promise<usuario>;
    obterUsuario(): Promise<usuario[]>;
    obterLoginPorId(id: string): Promise<usuario | null>;
    atualizarUsuario(usuario: usuario): Promise<usuario>;
    excluirUsuario(id: string): Promise<boolean>;
}
