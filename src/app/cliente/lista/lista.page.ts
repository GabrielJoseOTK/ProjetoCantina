import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { usuario } from '../usuario';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pedido } from '../pedido';
import { teste } from '../teste';
import { __await } from 'tslib';
import { IonRouterOutlet } from '@ionic/angular';

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
  constructor(private routerOutlet: IonRouterOutlet,private loginService: LoginService, private clienteService : ClienteService,private activatedRoute: ActivatedRoute, private router: Router ) 
  { 
    const meunome = this.loginService.getterlogin();
    this.clienteService.getUmUsuario(meunome).subscribe(
      usuario => {
        if(usuario){
        this.usuarionome = usuario.nome
        const whatever : teste = {
          _id : this.loginService.getterlogin(),
          status : "Em andamento"
        }
        this.clienteService.getClientePedido(whatever).subscribe(
          
          pedido => {
            
            try{this.pedido = pedido}
            catch(er){
              console.log(er)
            }
            this.atualizarInformacoesOrigem();
          }
        )
        } else {
          this.router.navigate(['/pedidos']);
        }
      }
      
    );



  }


  ionViewWillEnter() {
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
    // Executar ação de atualização das informações aqui
    this.atualizarInformacoesOrigem();
    }
    }
    
    atualizarInformacoesOrigem() {
      const meunome = this.loginService.getterlogin();
      this.clienteService.getUmUsuario(meunome).subscribe(
        usuario => {
          if(usuario){
          this.usuarionome = usuario.nome
          const whatever : teste = {
            _id : this.loginService.getterlogin(),
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