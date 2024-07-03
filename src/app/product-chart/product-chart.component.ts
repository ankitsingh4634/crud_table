import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnChanges {
  @Input() products: Product[] = [];

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  chartData: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.generateChartData();
    }
  }

  generateChartData() {
    this.chartData = this.products.map(product => ({
      name: product.name,
      value: product.price
    }));
  }
}
