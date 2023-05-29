import { Component } from '@angular/core';
import { pedido } from '../pedido';
import { DonoserviceService } from '../donoservice.service';
import { Router } from '@angular/router';
import { cantina } from '../cantina';

@Component({
  selector: 'app-criarlanche',
  templateUrl: './criarlanche.component.html',
  styleUrls: ['./criarlanche.component.css']
})
export class CriarlancheComponent {
  pedido: pedido[] = [];

  nome = '';
  preco : string = ''
  descricao : string = ''

  constructor(private donoService : DonoserviceService, private router: Router ){

  }
  onSubmit(form: any){
    this.nome = form.value.nome;
    this.preco = form.value.preco;
    this.descricao = form.value.descricao;



    let lanche: cantina = {
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,

    }; 

    this.donoService.criaLanche(lanche).subscribe(
      lanche => {
        console.log(lanche);
        this.router.navigate(['/cardapio']);
        
      },

    )
  }
}
