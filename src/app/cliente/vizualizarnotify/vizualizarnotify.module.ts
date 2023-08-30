import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizarnotifyPageRoutingModule } from './vizualizarnotify-routing.module';

import { VizualizarnotifyPage } from './vizualizarnotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizarnotifyPageRoutingModule
  ],
  declarations: [VizualizarnotifyPage]
})
export class VizualizarnotifyPageModule {}
