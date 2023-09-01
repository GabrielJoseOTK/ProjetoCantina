import { Component } from '@angular/core';
import { pedido } from '../pedido';
import { DonoserviceService } from '../donoservice.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pedido?: pedido[] = [];
  ok = '';
  nome : string = ''
  senha : string = ''
  teste : boolean = false
  valor = ""
  idcliente = [] 
  

  constructor(private donoService : DonoserviceService, private router: Router, private loginService: LoginService,){
    this.donoService.getPedidos().subscribe(
      pedidos => {
        this.pedido = pedidos;
        this.pedido.forEach(pedido => {
          this.donoService.getUmUsuario(pedido.cliente).subscribe(
            cliente => {
              pedido.nome = cliente.nome;
            }
          );
        });
        this.pedido = pedidos;
      }
    );
    this.valor = loginService.getterlogin();

  }
  onInit(){
    
  }
}
