import {estoque} from '../../entidades/estoque';

export interface estoqueRepos {
    criarEstoque(estoque: estoque): Promise<estoque>;
    obterEstoque(): Promise<estoque[]>;
    obterEstoquePorId(id: string): Promise<estoque | null>;
    atualizarEstoque(estoque: estoque): Promise<estoque>;
    excluirEstoque(id: string): Promise<boolean>;
}
