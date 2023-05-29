import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FazerpedidoPage } from './fazerpedido.page';

const routes: Routes = [
  {
    path: '',
    component: FazerpedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FazerpedidoPageRoutingModule {}
