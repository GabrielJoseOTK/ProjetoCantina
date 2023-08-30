import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListanotifyPageRoutingModule } from './listanotify-routing.module';

import { ListanotifyPage } from './listanotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListanotifyPageRoutingModule
  ],
  declarations: [ListanotifyPage]
})
export class ListanotifyPageModule {}
