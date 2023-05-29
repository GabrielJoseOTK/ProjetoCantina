import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from '../login.service';
import { usuario } from '../usuario';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.page.html',
  styleUrls: ['./logar.page.scss'],
})
export class LogarPage  {

  usuarios: usuario[] = [];
  
  ok = '';
  nome : string = ''
  senha : string = ''
  teste : boolean = false
  constructor(private loginService: LoginService, private router: Router ) {
    this.loginService.getUsuario().subscribe(
      usuarios => this.usuarios = usuarios
    );

   }


   onSubmit(form: any){
    this.nome = form.value.nome;
    this.senha = form.value.senha;

    

    let usuario: usuario = {
      nome:this.nome,
      senha:this.senha
    }; 

    this.loginService.getlogin(usuario).subscribe(
      usuario => {
        console.log(usuario._id);
        this.loginService.setterlogin(usuario._id);
        this.router.navigate(['/home']);
        
      },
      (teste) => {
        this.teste = true
      }
    )

  }

}
