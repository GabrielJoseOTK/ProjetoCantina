import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

import { LoginService } from 'src/app/login/login.service';
import { usuario } from '../usuario';
import { pedido } from '../pedido';
import { cantina } from '../cantina';




@Component({
  selector: 'app-fazerpedido',
  templateUrl: './fazerpedido.page.html',
  styleUrls: ['./fazerpedido.page.scss'],
})
export class FazerpedidoPage {

  usuario?: usuario[] = [];
  
  nossousuario?: any;
  cantina?: cantina[];
  lanchedescricao? : string = ''
  lanchepreco? : string = ''
  lanchenome? : string = ''
  usuarionome? : string = ''

  nomedocliente : any = ''
  nomedolanche : any = ''
  numero_de_lanche : string = ''
  descricao : string = ''
  status : string = ''

  constructor(private loginService: LoginService,private activatedRoute: ActivatedRoute, private router: Router, private clienteService : ClienteService ) {
    const ids =this.activatedRoute.snapshot.params['id'];
    const meunome = this.loginService.getterlogin();
    this.clienteService.getUmUsuario(meunome).subscribe(
      usuario => {
        if(usuario){
          this.usuarionome = usuario.nome

        } else {
          this.router.navigate(['/home']);
        }
      }
    );
    this.clienteService.getUmLanche(ids).subscribe(
      cantina => {
        if(cantina){
          this.lanchenome = cantina.nome
          this.lanchepreco = cantina.preco
          this.lanchedescricao = cantina.descricao
        } else {
          this.router.navigate(['/home']);
        }
      }
    )

   }
   onSubmit(form: any){
    this.numero_de_lanche = form.value.numero_de_lanche;
    this.descricao = form.value.descricao;



    this.nomedolanche = this.lanchenome;
    this.nomedocliente = this.usuarionome;

    let pedido: pedido = {

      cliente: this.nomedocliente,
      descricao: this.numero_de_lanche+' de '+ this.nomedolanche,
      status : "Em andamento"

      
    }; 

    this.clienteService.criaPedido(pedido).subscribe(
      pedido => {

        this.router.navigate(['/home']);
        
      },

    )

  }

}
