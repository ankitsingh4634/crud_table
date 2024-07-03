import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  @Input() products: Product[] = [];
  @Output() productsChange: EventEmitter<Product[]> = new EventEmitter<Product[]>();

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
    this.productsChange.emit(this.products);
    this.productForm.reset();
  }

  editProduct(product: Product) {
    this.editingProduct = product;
    this.productForm.patchValue(product);
  }

  updateProduct() {
    if (this.editingProduct) {
      Object.assign(this.editingProduct, this.productForm.value);
      this.editingProduct = null;
      this.productsChange.emit(this.products);
      this.productForm.reset();
    }
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
    this.productsChange.emit(this.products);
  }
}
