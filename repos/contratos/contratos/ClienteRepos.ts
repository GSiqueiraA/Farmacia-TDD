import {cliente} from '../../entidades/cliente';

export interface clienteRepos  {
  criarCliente(cliente: cliente): Promise<cliente>;
  obterCliente(): Promise<cliente[]>;
  obterClientePorId(id: string): Promise<cliente | null>;
  atualizarCliente(cliente: cliente): Promise<cliente>;
  excluirCliente(id: string): Promise<boolean>;
}
