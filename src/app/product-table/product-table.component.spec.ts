import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.interface'; // Adjust path as needed

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  products: Product[] = [];
  productForm: FormGroup;
  editingProduct: Product | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required]
    });
  }

  addProduct() {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...this.productForm.value
    };
    this.products.push(newProduct);
    this.productForm.reset();
    this.updateChartData();
  }

  // Other methods as needed

  updateChartData() {
    // Implement your chart data update logic here
  }
}
