import { Component } from '@angular/core';
import { pedido } from '../pedido';
import { DonoserviceService } from '../donoservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rejeita-pedido',
  templateUrl: './rejeita-pedido.component.html',
  styleUrls: ['./rejeita-pedido.component.css']
})
export class RejeitaPedidoComponent {
  pedido: pedido[] = [];

  constructor(private donoService : DonoserviceService, private router: Router, private activatedRoute: ActivatedRoute,){
    const ids =this.activatedRoute.snapshot.params['id'];
    let lanche: pedido = {
      status :"Rejeitado",


    }; 

    this.donoService.editaUmPedido(ids,lanche).subscribe(
      lanche => {
        console.log(lanche);
        this.router.navigate(['/home']);
        
      },

    )
  }

  onSubmit(form: any){
    




  }
}

