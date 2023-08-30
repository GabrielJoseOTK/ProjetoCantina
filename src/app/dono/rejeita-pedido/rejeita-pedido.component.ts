import { Component } from '@angular/core';
import { pedido } from '../pedido';
import { DonoserviceService } from '../donoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { notify } from '../notify';

@Component({
  selector: 'app-rejeita-pedido',
  templateUrl: './rejeita-pedido.component.html',
  styleUrls: ['./rejeita-pedido.component.css']
})
export class RejeitaPedidoComponent {
  pedido: pedido[] = [];
umpedido: pedido[] = [];

constructor(private donoService: DonoserviceService, private router: Router, private activatedRoute: ActivatedRoute) {
  const ids = this.activatedRoute.snapshot.params['id'];
  
  this.donoService.getUmPedido(ids).subscribe(
    pedi => {
      this.umpedido = pedi;

      let noti: notify = {
        pedido: pedi.descricao,
        idcliente: pedi.cliente,
        status: "Rejeitado"
      };

      this.donoService.criaNotify(noti).subscribe(
        lanche => {
          console.log(noti);
        },
        error => {
          console.log(noti);
        }
      );

      let lanche: pedido = {
        status: "Rejeitado"
      };

      this.donoService.editaUmPedido(ids, lanche).subscribe(
        lanche => {
          console.log(lanche);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );
}


  onSubmit(form: any){
    




  }
}

