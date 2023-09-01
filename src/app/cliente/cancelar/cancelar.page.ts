import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, NavController } from '@ionic/angular';
import { usuario } from '../usuario';
import { pedido } from '../pedido';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.page.html',
  styleUrls: ['./cancelar.page.scss'],
})
export class CancelarPage  {
  usuarios: usuario[] = [];
  exemplo :string = ''

  pedido : pedido[] = [];
  nome : string = ''
  senha : string = ''
  usuarionome? : string = ''
  constructor(
    
    private loginService: LoginService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private routerOutlet: IonRouterOutlet
  ) {
    const ids = this.activatedRoute.snapshot.params['id'];

    this.clienteService.deletarPedido(ids).subscribe(
      status => {
        // Redirecionar para a página de origem após atualizar as informações
        this.routerOutlet.pop().then(() => {
          // Executar ação de atualização das informações aqui
          
        });
      }
    )
  }


  
    

}
