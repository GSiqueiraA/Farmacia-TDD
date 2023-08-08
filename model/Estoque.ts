import {iDomainObject} from "./DomainObject";



export class Estoque extends iDomainObject {
  public id: string;
  public produtoId: string;
  public quantidade: number;

  constructor(id: string, produtoId: string, quantidade: number) {
    super();   
    this._id = id;
    this.produtoId = produtoId;
    this.quantidade = quantidade;
  }
}
