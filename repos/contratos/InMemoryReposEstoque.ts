import { estoque } from '../entidades/estoque';
import { estoqueRepos } from '../repos/contratos/EstoqueRepos';

export class InMemoryReposEstoque implements estoqueRepos {
  private estoques: estoque[] = [];

  async criarEstoque(estoque: estoque): Promise<estoque> {
    this.estoques.push(estoque);
    return estoque;
  }

  async obterEstoque(): Promise<estoque[]> {
    return this.estoques;
  }

  async obterEstoquePorId(id: string): Promise<estoque | null> {
    const estoque = this.estoques.find(e => e.id === id);
    return estoque || null;
  }

  async atualizarEstoque(estoque: estoque): Promise<estoque> {
    const index = this.estoques.findIndex(e => e.id === estoque.id);
    if (index !== -1) {
      this.estoques[index] = estoque;
      return estoque;
    }
    throw new Error('estoque não encontrado');
  }

  async excluirEstoque(id: string): Promise<boolean> {
    const index = this.estoques.findIndex(e => e.id === id);
    if (index !== -1) {
      this.estoques.splice(index, 1);
      return true;
    }
    return false;
  }
}