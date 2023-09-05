import { Component } from '@angular/core';
import { CartService } from 'src/app/services/products/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  tableHeader = ['Id', 'Name', 'Qty', 'Price', 'Add to cart'];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  getAllProducts() {
    return this.productService.getAllProducts();
  }

  addToCart(pId: number) {
    return this.cartService.add(pId);
  }
}
