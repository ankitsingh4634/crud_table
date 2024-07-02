// app.component.ts
import { Component } from '@angular/core';
import { Product } from './product.interface'; // Adjust path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];

  // Example initialization
  constructor() {
    this.products = [
      { id: 1, name: 'Product A', price: 100, category: 'Category A' },
      { id: 2, name: 'Product B', price: 150, category: 'Category B' }
    ];
  }

  updateProducts(updatedProducts: Product[]) {
    this.products = updatedProducts;
  }
}
