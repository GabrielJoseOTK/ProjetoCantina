import { Component } from '@angular/core';
import { DonoserviceService } from '../donoservice.service';
import { Router } from '@angular/router';
import { pedido } from '../pedido';

@Component({
  selector: 'app-resolvidos',
  templateUrl: './resolvidos.component.html',
  styleUrls: ['./resolvidos.component.css']
})
export class ResolvidosComponent {
  pedido: pedido[] = [];
  ok = '';
  nome : string = ''
  senha : string = ''
  teste : boolean = false
  

  constructor(private donoService : DonoserviceService, private router: Router ){
    this.donoService.getPedidos().subscribe(
      pedido => this.pedido = pedido
    );
  }
  onInit(){
    
  }
}
