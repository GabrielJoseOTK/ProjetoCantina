import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


import { usuario } from '../usuario';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage  {

  nome : string = ''
  senha : string = ''
  nivel : string = ''
  constructor(private loginService: LoginService, private router: Router ) { }

  onSubmit(form: any){
    this.nome = form.value.nome;
    this.senha = form.value.senha;
    this.nivel = "cliente";



    let usuario: usuario = {
      nome:this.nome,
      senha:this.senha,
      nivel:this.nivel

    }; 

    let serve = this.loginService.create(usuario).subscribe(
      usuario => {
        this.loginService.setterlogin(usuario._id);
        console.log(usuario);
        this.router.navigate(['/home']);
      }
    )

  }

}
