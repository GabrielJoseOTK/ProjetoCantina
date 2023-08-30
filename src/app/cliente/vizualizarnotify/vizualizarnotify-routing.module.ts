import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VizualizarnotifyPage } from './vizualizarnotify.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizarnotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VizualizarnotifyPageRoutingModule {}
