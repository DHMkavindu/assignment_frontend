import {ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ItemService} from 'src/app/service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  displayedColumns: string[] = ["id", "description", "priceList"];
  itemPrice: ItemPrice[] = new Array();
  dataSource = new MatTableDataSource<ItemPrice>(this.itemPrice);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    // this.paginator.pageIndex = 0;
    // this.paginator.pageSize = 50;
    // this.dataSource.paginator = this.paginator;
    this.getAllItem();
  }

  getAllItem() {
    this.itemService.getAllItem().subscribe(result => {
      this.itemPrice = result.description;
      console.log(result);
    });
  }

  loadNextData() {
    this.getAllItem();
  }
}

export interface ItemPrice {
  description: string;
  priceList: any[];
}

