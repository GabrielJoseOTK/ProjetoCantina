import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logar',
    pathMatch: 'full'
  },
  {
    path: 'homex',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },


  {
    path: 'cadastro',
    loadChildren: () => import('./login/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'logar',
    loadChildren: () => import('./login/logar/logar.module').then( m => m.LogarPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./cliente/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./cliente/pedir/pedir.module').then( m => m.PedirPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./cliente/retorno/retorno.module').then( m => m.RetornoPageModule)
  },
  {
    path: 'fazerpedido/:id',
    loadChildren: () => import('./cliente/fazerpedido/fazerpedido.module').then( m => m.FazerpedidoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
