import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.page.html',
  styleUrls: ['./cancelar.page.scss'],
})
export class CancelarPage  {

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
          this.atualizarInformacoesOrigem();
        });
      }
    )
  }


  ionViewWillEnter() {
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
    // Executar ação de atualização das informações aqui
    this.atualizarInformacoesOrigem();
    }
    }
    
    atualizarInformacoesOrigem() {

    }
    

}
