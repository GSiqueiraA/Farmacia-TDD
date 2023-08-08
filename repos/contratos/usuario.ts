import {usuario} from '../../entidades/usuario';

export interface usuarioRepos {
    criarUsuario(usuario: usuario): Promise<usuario>;
    obterUsuario(): Promise<usuario[]>;
    obterLoginPorId(id: string): Promise<usuario | null>;
    atualizarUsuario(evento: Evento): Promise<usuario>;
    excluirUsuario(id: string): Promise<boolean>;
}
