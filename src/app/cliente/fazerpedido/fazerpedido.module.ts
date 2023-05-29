import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FazerpedidoPageRoutingModule } from './fazerpedido-routing.module';

import { FazerpedidoPage } from './fazerpedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FazerpedidoPageRoutingModule
  ],
  declarations: [FazerpedidoPage]
})
export class FazerpedidoPageModule {}
