import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

import { StoreService } from 'src/app/services/store.service';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  today = new Date();
  date = new Date(2021,4,23);

  constructor(private storeService: StoreService,private productService: ProductosService) {
    this.myShoppingCart = storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().
    subscribe(data=>{
      this.products = data
    })
  }
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
