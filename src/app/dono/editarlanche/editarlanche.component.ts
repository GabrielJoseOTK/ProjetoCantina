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
  
  pedido: pedido[] = [];
  nomes = '';
  precos : string = ''
  descricaos : string = ''

  constructor(private donoService : DonoserviceService, private router: Router, private activatedRoute: ActivatedRoute,){
    const ids =this.activatedRoute.snapshot.params['id'];
    this.donoService.getUmLanche(ids).subscribe(
      cantina => {
        if(cantina){
          this.nome = cantina.nome
          this.preco = cantina.preco
          this.descricao = cantina.descricao
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



    let lanche: cantina = {
      nome: this.nomes,
      preco: this.precos,
      descricao: this.descricaos,

    }; 

    this.donoService.editaUmLanche(ids,lanche).subscribe(
      lanche => {
        console.log(lanche);
        this.router.navigate(['/cardapio']);
        
      },

    )
  }


}
