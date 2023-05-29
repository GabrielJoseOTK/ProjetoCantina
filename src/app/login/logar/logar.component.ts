import { Component } from '@angular/core';
import { usuario } from '../usuario';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent {

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
        console.log(usuario);
        this.loginService.setterlogin(usuario.nome);
        this.router.navigate(['/home']);
        
      },
      (teste) => {
        this.teste = true
      }
    )

  }
}
