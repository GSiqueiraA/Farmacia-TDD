import {produto} from '../../entidades/produto';

export interface produtoRepos  {
  criarProduto(produto: produto): Promise<produto>;
  obterProduto(): Promise<produto[]>;
  obterProdutoPorId(id: string): Promise<produto | null>;
  atualizarProduto(produto: produto): Promise<produto>;
  excluirProduto(id: string): Promise<boolean>;
}
