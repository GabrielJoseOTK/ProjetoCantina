import { Component } from '@angular/core';
import { DonoserviceService } from '../donoservice.service';
import { Router } from '@angular/router';
import { cantina } from '../cantina';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {

  cantina?: cantina[] = [];

  constructor(private donoService : DonoserviceService, private router: Router ){
    this.donoService.getCardapio().subscribe(
      cantina => this.cantina = cantina
    );
}
}
