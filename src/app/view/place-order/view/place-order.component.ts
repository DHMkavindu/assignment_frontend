import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlaceOrderService} from 'src/app/service/place-order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  item: Item[] = [];


  placeOrderForm = new FormGroup({
    description: new FormControl(),
    qty: new FormControl(),
    unitOrCarton: new FormControl(),
    finalePrice: new FormControl(),
  });

  constructor(private placeOrderService: PlaceOrderService) {
  }

  ngOnInit(): void {
    this.getAllItems();
  }


  getAllItems() {
    this.placeOrderService.getItems().subscribe(result => {
      console.log(result);
      this.item = result;
      console.log(this.item);
    });


  }

  getFinalePrice() {
    let value = "C";
    let description = this.placeOrderForm.get("description");
    let qty = this.placeOrderForm.get("qty");
    let orderType = this.placeOrderForm.get("unitOrCarton");

    if (orderType?.value === "u") {
      value = "U";
    }
    this.placeOrderService.finalePrice(description?.value, qty?.value,value).subscribe(result => {
      console.log(result.finalValue);
      this.placeOrderForm.get("finalePrice")?.setValue(result.finalValue);
    });
  }

}

export interface Item {
  item_description: number;
  carton_price: number;
  item_que: number;
  carton_discount: number;
  unit_discount: number;
  unit_fr_carton: number;
}
