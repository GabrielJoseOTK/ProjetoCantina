import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { ClienteService } from './cliente/cliente.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  id : any = []
  constructor(private loginService: LoginService, private clienteService : ClienteService,private activatedRoute: ActivatedRoute, private router: Router ) {


    loginService.getterlogin()
    this.clienteService.getNumeroNotify(loginService.getterlogin()).subscribe(
      notify =>{
        this.id = notify
        console.log(this.id)
      }


      
    );
  }
}
