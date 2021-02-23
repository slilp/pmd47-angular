import { Component, OnInit ,ViewChildren , QueryList } from '@angular/core';
import {Product} from '../product';
import {ProductItemComponent} from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  @ViewChildren(ProductItemComponent)
  productItems:QueryList<ProductItemComponent>;

  products:Product[];

  constructor() {
    this.products= [];
   }

  ngOnInit(): void {

  }

  selectedProduct(productComponent:ProductItemComponent){
    this.productItems.forEach(p=>{
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}
