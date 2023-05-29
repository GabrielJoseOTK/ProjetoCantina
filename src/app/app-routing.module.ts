import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:"", component:LogarComponent},
  {path:"cadastrar", component:CadastrarComponent},
  {path:"home", component:HomeComponent},
  {path:"cardapio", component:CardapioComponent},
  {path:"novolanche", component:CriarlancheComponent},
  {path:"editalanche/:id", component:EditarlancheComponent},
  {path:"droplanche/:id", component:DroplancheComponent},
  {path:"rejeita/:id", component:RejeitaPedidoComponent},
  {path:"entregar/:id", component:EntregaPedidoComponent},
  {path:"resolvidos", component:ResolvidosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
