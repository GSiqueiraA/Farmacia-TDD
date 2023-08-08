import { atendente } from '../entidades/atendente';
import { atendenteRepos } from '../repos/contratos/AtendenteRepos';

export class InMemoryReposAtendente implements atendenteRepos {
  private atendentes: atendente[] = [];

  async criarAtendente(atendente: atendente): Promise<atendente> {
    this.atendentes.push(atendente);
    return atendente;
  }

  async obterAtendente(): Promise<atendente[]> {
    return this.atendentes;
  }

  async obterAtendentePorId(id: string): Promise<atendente | null> {
    const atendente = this.atendentes.find(u => u.id === id);
    return atendente || null;
  }

  async atualizarAtendente(atendente: atendente): Promise<atendente> {
    const index = this.atendentes.findIndex(u => u.id === atendente.id);
    if (index !== -1) {
      this.atendentes[index] = atendente;
      return atendente;
    }
    throw new Error('atendente não encontrado');
  }

  async excluirAtendente(id: string): Promise<boolean> {
    const index = this.atendentes.findIndex(u => u.id === id);
    if (index !== -1) {
      this.atendentes.splice(index, 1);
      return true;
    }
    return false;
  }
}