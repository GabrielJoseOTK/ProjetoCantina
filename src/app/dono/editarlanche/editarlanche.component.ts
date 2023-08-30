import { Component } from '@angular/core';
import { cantina } from '../cantina';
import { DonoserviceService } from '../donoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { pedido } from '../pedido';

@Component({
  selector: 'app-editarlanche',
  templateUrl: './editarlanche.component.html',
  styleUrls: ['./editarlanche.component.css']
})
export class EditarlancheComponent {
  cantina?: cantina[];
  id : string = ''
  inscricao: Subscription | undefined
  nome? : string = ''
  preco? : string = ''
  descricao? : string = ''
  quantidade? : number = 0
  
  pedido: pedido[] = [];
  nomes = '';
  precos : string = ''
  descricaos : string = ''
  quantidades : number = 0

  constructor(private donoService : DonoserviceService, private router: Router, private activatedRoute: ActivatedRoute,){
    const ids =this.activatedRoute.snapshot.params['id'];
    this.donoService.getUmLanche(ids).subscribe(
      cantina => {
        if(cantina){
          this.nome = cantina.nome
          this.preco = cantina.preco
          this.descricao = cantina.descricao
          this.quantidade = cantina.quantidade
        } else {
          this.router.navigate(['/home']);
        }
      }
    )
    console.log(ids)

  };
  onSubmit(form: any){
    const ids =this.activatedRoute.snapshot.params['id'];
    this.nomes = form.value.nome;
    this.precos = form.value.preco;
    this.descricaos = form.value.descricao;
    this.quantidades = form.value.quantidade;



    let lanche: cantina = {
      nome: this.nomes,
      preco: this.precos,
      descricao: this.descricaos,
      quantidade: this.quantidades,

    }; 

    this.donoService.editaUmLanche(ids,lanche).subscribe(
      lanche => {
        console.log(lanche);
        this.router.navigate(['/cardapio']);
        
      },

    )
  }


}
