import { cliente } from '../entidades/cliente';
import { clienteRepos } from '../repos/contratos/ClienteRepos';

export class InMemoryReposCliente implements clienteRepos {
  private clientes: cliente[] = [];

  async criarCliente(cliente: cliente): Promise<cliente> {
    this.clientes.push(cliente);
    return cliente;
  }

  async obterCliente(): Promise<cliente[]> {
    return this.clientes;
  }

  async obterClientePorId(id: string): Promise<cliente | null> {
    const cliente = this.clientes.find(c => c.id === id);
    return cliente || null;
  }

  async atualizarCliente(cliente: cliente): Promise<cliente> {
    const index = this.clientes.findIndex(c => c.id === cliente.id);
    if (index !== -1) {
      this.clientes[index] = cliente;
      return cliente;
    }
    throw new Error('cliente não encontrado');
  }

  async excluirCliente(id: string): Promise<boolean> {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
      return true;
    }
    return false;
  }
}