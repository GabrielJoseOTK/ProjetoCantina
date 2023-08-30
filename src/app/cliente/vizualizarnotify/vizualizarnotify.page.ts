import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { LoginService } from 'src/app/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonRouterOutlet } from '@ionic/angular';
import { notify } from '../notify';

@Component({
  selector: 'app-vizualizarnotify',
  templateUrl: './vizualizarnotify.page.html',
  styleUrls: ['./vizualizarnotify.page.scss'],
})
export class VizualizarnotifyPage {

  status: string = "visualizado";
  notify : notify[] = [];
  constructor(
    
    private loginService: LoginService,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private routerOutlet: IonRouterOutlet
  ) {
    const ids = this.activatedRoute.snapshot.params['id'];

    this.clienteService.editaUmNotify(ids, "visualizado").subscribe(
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
    this.loginService.getterlogin()
    this.clienteService.getListaNotify(this.loginService.getterlogin()).subscribe(
      notify =>{
        
        this.notify = notify;
      },
      error => {
        console.log('Erro ao obter notificações', error);
      }
    );
  }

}
