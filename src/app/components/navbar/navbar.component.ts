import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/products/cart.service';
import { IProduct } from 'src/app/services/products/products.model';

interface Menu {
  title: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menus: Menu[] = [
    { title: 'Data Binding', href: '/data-binding' },
    { title: 'Reactive Form', href: '/form' },
    { title: 'Service', href: '/service' },
    { title: 'Lab 6', href: '/lab6' },
  ];

  cart: IProduct[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {}

  getCartCounter() {
    return this.cartService.getCounter();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  removeProduct(idx: number) {
    return this.cartService.removeProduct(idx);
  }
}
