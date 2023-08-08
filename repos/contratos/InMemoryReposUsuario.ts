import { usuario } from '../entidades/usuario';
import { usuarioRepos } from '../repos/contratos/UsuarioRepos';

export class InMemoryReposUsuario implements usuarioRepos {
  private usuarios: usuario[] = [];

  async criarUsuario(usuario: usuario): Promise<usuario> {
    this.usuarios.push(usuario);
    return usuario;
  }

  async obterUsuario(): Promise<usuario[]> {
    return this.usuarios;
  }

  async obterUsuarioPorId(id: string): Promise<usuario | null> {
    const usuario = this.usuarios.find(u => u.id === id);
    return usuario || null;
  }

  async atualizarUsuario(usuario: usuario): Promise<usuario> {
    const index = this.usuarios.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this.usuarios[index] = usuario;
      return usuario;
    }
    throw new Error('usuario não encontrado');
  }

  async excluirUsuario(id: string): Promise<boolean> {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      return true;
    }
    return false;
  }
}