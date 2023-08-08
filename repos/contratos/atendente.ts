import {atendente} from '../../entidades/atendente';

export interface atendenteRepos  {
  criarAtendente(atendente: atendente): Promise<atendente>;
  obterAtendente(): Promise<atendente[]>;
  obterAtendentePorId(id: string): Promise<atendente | null>;
  atualizarAtendente(atendente: atendente): Promise<atendente>;
  excluirAtendente(id: string): Promise<boolean>;
}
