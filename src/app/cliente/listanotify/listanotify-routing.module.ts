import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListanotifyPage } from './listanotify.page';

const routes: Routes = [
  {
    path: '',
    component: ListanotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListanotifyPageRoutingModule {}
