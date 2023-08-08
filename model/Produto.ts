import {iDomainObject} from "./DomainObject";



export class Produto extends iDomainObject {
  public id: string;
  public nome: string;
  public preco: number;
  public quantidade: number;

  constructor(id: string, nome: string, preco: number, quantidade: number) {
    super();   
    this._id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}