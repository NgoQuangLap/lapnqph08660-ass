import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  selected: Product;
  page = 1;
  pageSize = 9;

  constructor(
    private productService: ProductService
  ) {
    console.log('constructor')
   }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
   this.productService.getProducts().subscribe(data => {
     this.products = data;
    });
  }
  
  showDetail(product){
    this.selected = product;
    // console.log(this.selected);
  }

}