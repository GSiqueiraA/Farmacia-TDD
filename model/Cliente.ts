import {iDomainObject} from "./DomainObject";


export class Atendente extends iDomainObject {
  public id: string;
  public login: string;
  public password: string;

  constructor(id: string, login: string, password: string) {
    super();  
    this._id = id;
    this.login = login;
    this.password = password;
  }
}