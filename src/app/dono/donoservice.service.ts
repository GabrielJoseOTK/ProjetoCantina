import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { usuario } from './usuario';
import { pedido } from './pedido';
import { cantina } from './cantina';


@Injectable({
  providedIn: 'root'
})
export class DonoserviceService {


    private apiUrl = 'http://localhost:3000/usuario/listausuarios';
    private apiUrl2 = 'http://localhost:3000/pedido/listapedido';
    private apiUrl3 = 'http://localhost:3000/pedido/atualizarpedido';
    
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
    
}
