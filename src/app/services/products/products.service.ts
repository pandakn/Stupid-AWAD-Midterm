import { Inject, Injectable, forwardRef } from '@angular/core';
import mockProducts from 'src/__mock__/mockProducts';
import { CartService } from './cart.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  products = mockProducts;

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products[id];
  }
}
