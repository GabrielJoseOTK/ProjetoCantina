import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class DonoserviceService {


    private apiUrl = 'http://localhost:3000/usuario/listausuarios';
  
    //criando variavel api com a ação da api, também é feito um metodo que corresponda essa ação//
  

    constructor(private http: HttpClient) { }
  
    getEstoque(): Observable<usuario[]> {
      return this.http.get<usuario[]>(this.apiUrl);
    }
}
