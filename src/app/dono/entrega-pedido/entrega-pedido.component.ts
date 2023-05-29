import { Component } from '@angular/core';
import { DonoserviceService } from '../donoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pedido } from '../pedido';

@Component({
  selector: 'app-entrega-pedido',
  templateUrl: './entrega-pedido.component.html',
  styleUrls: ['./entrega-pedido.component.css']
})


export class EntregaPedidoComponent {

  
pedido: pedido[] = [];

  constructor(private donoService : DonoserviceService, private router: Router, private activatedRoute: ActivatedRoute,){
    const ids =this.activatedRoute.snapshot.params['id'];




    let lanche: pedido = {
      status :"Entregue",


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
