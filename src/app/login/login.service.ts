import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static loginid = "";

  
  private apiUrl  = 'http://localhost:3000/usuario/lista';
  
  private apiUrl2  = 'http://localhost:3000/usuario/login_unico';

  private apicreate  = 'http://localhost:3000/usuario/create';
  //criando variavel api com a ação da api, também é feito um metodo que corresponda essa ação//


  constructor(private http: HttpClient) { }


  public getterlogin(){
    const ok = LoginService.loginid
    return ok
  }


  public setterlogin(id:string,){
    LoginService.loginid = id;

  }
  getUsuario(): Observable<usuario[]>{
    return this.http.get<usuario[]>(this.apiUrl)
  }

  getlogin(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl2, data)
  }

  create(data:any): Observable<any> {
    return this.http.post(this.apicreate, data);
  }
}
