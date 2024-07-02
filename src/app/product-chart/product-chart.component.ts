// product-chart.component.ts
import { Component, Input } from '@angular/core';
// import { Color } from 'ngx-charts';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent {
  @Input() products: Product[] = [];

  // colorScheme: Color[] = [
  //   { name: 'green', selectable: true, group: 'ordinal' },
  //   { name: 'red', selectable: true, group: 'ordinal' },
  //   { name: 'yellow', selectable: true, group: 'ordinal' },
  //   { name: 'gray', selectable: true, group: 'ordinal' }
  // ];

  chartData: any[] = []; // Define your chart data structure as needed

  constructor() {
    // Initialize chart data
    this.generateChartData();
  }

  generateChartData() {
    // Logic to generate chart data based on products
    // Example logic:
    this.chartData = this.products.map(product => {
      return {
        name: product.name,
        value: product.price
      };
    });
  }
}
