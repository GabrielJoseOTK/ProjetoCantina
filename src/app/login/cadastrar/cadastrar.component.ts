import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { usuario } from '../usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  nome : string = ''
  senha : string = ''
  nivel : string = ''

  constructor(private loginService: LoginService, private router: Router ) {}


  onSubmit(form: any){
    this.nome = form.value.nome;
    this.senha = form.value.senha;
    this.nivel = "Funcionario";

    this.loginService.setterlogin("logados");

    let usuario: usuario = {
      nome:this.nome,
      senha:this.senha,
      nivel:this.nivel

    }; 

    let serve = this.loginService.create(usuario).subscribe(
      usuario => {
        console.log(usuario);
        this.router.navigate(['/']);
      }
    )

  }
}
