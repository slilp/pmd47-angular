import { Component, OnInit  } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[] = [
    {
      name:"I-phone",
      price:35000
    },
    {
      name:"Samsung",
      price:30000
    },
    {
      name:"Huawei",
      price:28000
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct(product:Product){
    alert(`You select ${product.name}`);
  }

}
