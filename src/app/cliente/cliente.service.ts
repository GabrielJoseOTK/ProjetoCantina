import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { usuario } from './usuario';
import { pedido } from './pedido';
import { cantina } from './cantina';
import { teste } from './teste';
import { notify } from './notify';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
  private apiUrl = 'http://localhost:3000/usuario/listausuarios';
  private apiUrl2 = 'http://localhost:3000/pedido/listapedido';
  private apiUrl3 = 'http://localhost:3000/pedido/atualizarpedido';
  private apiaddpedido = 'http://localhost:3000/pedido/inserir';
  private apiclientepedido = 'http://localhost:3000/pedido/pedidosespecificos';
  private deletarpedido = 'http://localhost:3000/pedido/cancelarpedido';
  
  private usuarioapi  = 'http://localhost:3000/usuario/login_unico';
  private unicousuario  = 'http://localhost:3000/usuario/encontrar';

  private notifyUnica  = 'http://localhost:3000/notify/atualizarnoti';
  private listaNotify  = 'http://localhost:3000/notify/pelonome';
  private numeroNotify  = 'http://localhost:3000/notify/numero_notify';

  private apicantina = 'http://localhost:3000/cantina/cardapio';
  private apiaddlanche = 'http://localhost:3000/cantina/create';
  private apifindlanche = 'http://localhost:3000/cantina/encontrar';
  private apipatchlanche = 'http://localhost:3000/cantina/atualizarcardapio';
  private apideletelanche = 'http://localhost:3000/cantina/deletarcardapio';
  //criando variavel api com a ação da api, também é feito um metodo que corresponda essa ação//


  constructor(private http: HttpClient) { }

  getEstoque(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.apiUrl);
  }
  getPedidos(): Observable<pedido[]> {
    return this.http.get<pedido[]>(this.apiUrl2);
  }
  getCardapio(): Observable<cantina[]> {
    return this.http.get<cantina[]>(this.apicantina);
  }
  criaLanche(data:any): Observable<any> {
    return this.http.post(this.apiaddlanche, data);
  }


  criaPedido(data:any): Observable<any> {
    return this.http.post(this.apiaddpedido, data);
  }
  getClientePedido(data:teste): Observable<any> {
    return this.http.post<pedido>(this.apiclientepedido, data);
  }



  getUmLanche(id:string): Observable<cantina> {
    return this.http.get<cantina>(`${this.apifindlanche}/${id}`);
  }
  editaUmLanche(id:string, data:cantina): Observable<cantina> {
    return this.http.patch<cantina>(`${this.apipatchlanche}/${id}`, data);
  }
  deleteUmLanche(id:string): Observable<cantina> {
    return this.http.delete<cantina>(`${this.apideletelanche}/${id}`);
  }

  editaUmPedido(id:string, data:pedido): Observable<pedido> {
    return this.http.patch<pedido>(`${this.apiUrl3}/${id}`, data);
  }

  getusuario(data:any): Observable<any> {
    return this.http.post<any>(this.usuarioapi, data)
  }
  getusuariounico(data:any): Observable<any> {
    return this.http.post<any>(this.usuarioapi, data)
  }

  getUmUsuario(id:string): Observable<usuario> {
    return this.http.get<usuario>(`${this.unicousuario}/${id}`);
  }



  deletarPedido(id:string): Observable<pedido> {
    return this.http.get<pedido>(`${this.deletarpedido}/${id}`);
  }




  getNumeroNotify(id:string): Observable<string> {
    return this.http.get<string>(`${this.notifyUnica}/${id}/naovisualizado`);
  }
  editaUmNotify(id:string, status:string): Observable<notify> {
    return this.http.patch<notify>(`${this.notifyUnica}/${id}`, status);
  }
  getListaNotify(idcliente:string): Observable<notify[]> {
    return this.http.get<notify[]>(`${this.listaNotify}/${idcliente}`);
  }



}
