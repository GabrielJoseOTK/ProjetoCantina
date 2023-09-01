import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { cantina } from '../cantina';

@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.page.html',
  styleUrls: ['./pedir.page.scss'],
})
export class PedirPage implements OnInit {

  
  cantina?: cantina[] = [];
  constructor(private clienteService : ClienteService, private router: Router ) { }

  ngOnInit() {
    this.clienteService.getCardapio().subscribe(
      cantina => {

              this.cantina = cantina
        
      }
      
    );
  }

}
