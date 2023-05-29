import { Component } from '@angular/core';
import { DonoserviceService } from '../donoservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-droplanche',
  templateUrl: './droplanche.component.html',
  styleUrls: ['./droplanche.component.css']
})
export class DroplancheComponent {
  constructor(private donoService : DonoserviceService, private router: Router, private activatedRoute: ActivatedRoute,){
    const ids =this.activatedRoute.snapshot.params['id'];
    this.donoService.deleteUmLanche(ids).subscribe(
      cantina => {

          this.router.navigate(['/cardapio']);
      }
    )
  }




}
