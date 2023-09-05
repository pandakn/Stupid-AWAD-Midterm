import { Injectable } from '@angular/core';
import { IProduct } from './products.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  counter = 0;
  totalPrice = 0;
  cart: IProduct[] = [];

  constructor(private productService: ProductsService) {}

  add(pId: number) {
    console.log(`Add product ${pId} to cart`);
    this.cart.push(this.productService.getProduct(pId));
    this.totalPrice += this.productService.getProduct(pId).price;
    this.counter = this.cart.length;
  }

  removeProduct(idx: number) {
    if (idx >= 0 && idx < this.cart.length) {
      const removedProduct = this.cart.splice(idx, 1)[0]; // Remove the product and get the removed item
      this.totalPrice -= removedProduct.price;
      this.counter = this.cart.length;
      console.log(`Removed product at index ${idx} from cart`);
    }
  }

  getCounter() {
    return this.counter;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getCart() {
    return this.cart;
  }
}
