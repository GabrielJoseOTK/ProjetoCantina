import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcompComponent } from './teste/testcomp/testcomp.component';
import { OkOkComponent } from './teste/ok-ok/ok-ok.component';
import { LogarComponent } from './login/logar/logar.component';
import { CadastrarComponent } from './login/cadastrar/cadastrar.component';
import { HomeComponent } from './dono/home/home.component';
import { CardapioComponent } from './dono/cardapio/cardapio.component';
import { CriarlancheComponent } from './dono/criarlanche/criarlanche.component';
import { EditarlancheComponent } from './dono/editarlanche/editarlanche.component';
import { DroplancheComponent } from './dono/droplanche/droplanche.component';
import { RejeitaPedidoComponent } from './dono/rejeita-pedido/rejeita-pedido.component';
import { EntregaPedidoComponent } from './dono/entrega-pedido/entrega-pedido.component';
import { ResolvidosComponent } from './dono/resolvidos/resolvidos.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    OkOkComponent,
    LogarComponent,
    CadastrarComponent,
    HomeComponent,
    CardapioComponent,
    CriarlancheComponent,
    EditarlancheComponent,
    DroplancheComponent,
    RejeitaPedidoComponent,
    EntregaPedidoComponent,
    ResolvidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
