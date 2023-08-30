import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { LoginService } from 'src/app/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { notify } from '../notify';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-listanotify',
  templateUrl: './listanotify.page.html',
  styleUrls: ['./listanotify.page.scss'],
})
export class ListanotifyPage {


  notify : notify[] = [];
  notifies : notify[] = [];
  constructor(    private routerOutlet: IonRouterOutlet,private loginService: LoginService, private clienteService : ClienteService,private activatedRoute: ActivatedRoute, private router: Router ) 
  { 

    // this.clienteService.getCardapio().subscribe(
    //   cantina => this.cantina = cantina
    // );
    loginService.getterlogin()
    this.clienteService.getListaNotify(loginService.getterlogin()).subscribe(
      notify =>{
        
        this.notify = notify;
        this.atualizarInformacoesOrigem();
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


