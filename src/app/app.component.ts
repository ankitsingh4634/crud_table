import { Component } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 200, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 300, category: 'Category 3' },
    { id: 4, name: 'Product 4', price: 400, category: 'Category 4' }
  ];

  updateProducts(products: Product[]) {
    this.products = [...products];
  }
}
