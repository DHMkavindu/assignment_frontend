import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule) }, { path: 'item', loadChildren: () => import('./view/item/item.module').then(m => m.ItemModule) }, { path: 'place-order', loadChildren: () => import('./view/place-order/place-order.module').then(m => m.PlaceOrderModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
