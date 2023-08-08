import { produto } from '../entidades/produto';
import { produtoRepos } from '../repos/contratos/ProdutoRepos';

export class InMemoryReposProduto implements produtoRepos {
  private produtos: produto[] = [];

  async criarProduto(produto: produto): Promise<produto> {
    this.produtos.push(produto);
    return produto;
  }

  async obterProduto(): Promise<produto[]> {
    return this.produtos;
  }

  async obterProdutoPorId(id: string): Promise<produto | null> {
    const produto = this.produtos.find(p => p.id === id);
    return produto || null;
  }

  async atualizarProduto(produto: produto): Promise<produto> {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.produtos[index] = produto;
      return produto;
    }
    throw new Error('produto não encontrado');
  }

  async excluirProduto(id: string): Promise<boolean> {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      return true;
    }
    return false;
  }
}