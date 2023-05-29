import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { usuario } from '../usuario';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pedido } from '../pedido';
import { teste } from '../teste';
import { __await } from 'tslib';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {
  
  usuarios: usuario[] = [];
  exemplo :string = ''

  pedido : pedido[] = [];
  nome : string = ''
  senha : string = ''
  usuarionome? : string = ''
  constructor(private loginService: LoginService, private clienteService : ClienteService,private activatedRoute: ActivatedRoute, private router: Router ) 
  { 
    const meunome = this.loginService.getterlogin();
    this.clienteService.getUmUsuario(meunome).subscribe(
      usuario => {
        if(usuario){
        this.usuarionome = usuario.nome
        const whatever : teste = {
          cliente : this.usuarionome,
          status : "Em andamento"
        }
        this.clienteService.getClientePedido(whatever).subscribe(
          
          pedido => {
            
            try{this.pedido = pedido}
            catch(er){
              console.log(er)
            }
          }
        )
        } else {
          this.router.navigate(['/pedidos']);
        }
      }
      
    );



  }


}