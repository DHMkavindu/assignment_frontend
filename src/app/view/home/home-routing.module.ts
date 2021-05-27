import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home.component';

const routes: Routes = [{ 
  path: '',
  component: HomeComponent ,
       children:[
      {
        path:'item',
        loadChildren:"src/app/view/item/item.module#ItemModule"
      },
      {
         path:'placeorder',
         loadChildren:"src/app/view/place-order/place-order.module#PlaceOrderModule"
      }
      
      ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
