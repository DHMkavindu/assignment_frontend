import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { PlaceOrderComponent } from './view/place-order.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentModule } from 'src/app/mat-component.module';
import { PlaceOrderService } from 'src/app/service/place-order.service';


@NgModule({
  declarations: [PlaceOrderComponent],
  imports: [
    CommonModule,
    PlaceOrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatComponentModule
  ],
  providers:[PlaceOrderService]
})
export class PlaceOrderModule { }
