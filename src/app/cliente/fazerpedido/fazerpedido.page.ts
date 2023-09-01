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
  numero_de_lanche : number = 0
  descricao : string = ''
  status : string = ''

  quantidadedisponivel: boolean = false

  lancheeditavel? : cantina;

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
    const ids =this.activatedRoute.snapshot.params['id'];
    this.numero_de_lanche = form.value.numero_de_lanche;
    this.descricao = form.value.descricao;
    


    this.nomedolanche = this.lanchenome;
    this.nomedocliente = this.usuarionome;

    let pedido: pedido = {

      cliente: this.loginService.getterlogin(),
      descricao: this.numero_de_lanche+' de '+ this.nomedolanche,
      status : "Em andamento"

      
    }; 


    
    

    if(this.numero_de_lanche >=1){
      this.clienteService.criaPedido(pedido).subscribe(
        pedido => {
          this.clienteService.getUmLanche(ids).subscribe(
            cantina =>{
              this.lancheeditavel = cantina

              if(this.lancheeditavel.quantidade){
                if(this.lancheeditavel.quantidade >=this.numero_de_lanche){

                
                  this.lancheeditavel.quantidade -= this.numero_de_lanche;
                  
                  let lanche: cantina = {
                    nome:this.lancheeditavel.nome,
                    preco: this.lancheeditavel.preco,
                    descricao: this.lancheeditavel.descricao,
                    quantidade: this.lancheeditavel.quantidade,
              
                  }; 
                  this.clienteService.editaUmLanche(ids, lanche).subscribe(
                    lanche => {
                      console.log(lanche);
                      this.router.navigate(['/home']);
                    })
                  
                }
                else
                {
                  this.quantidadedisponivel = true
                  console.log("quantidade")
                  
                }
              }else{
                console.log("ERRO")
              }
              
            }
          )
          
          
        },

      )
    }else{
      console.log("ERROR")
    }

  }

}
