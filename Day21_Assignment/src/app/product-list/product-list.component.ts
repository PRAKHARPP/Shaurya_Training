import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductData: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  onProductUpdate(Product: any) {
    this.ProductData.push(Product);
   console.log( Product.productid);
    }

  onDelete(data: any) {
  
    this.ProductData.splice(data,1);
  }

}
