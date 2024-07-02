import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductTableComponent },
  { path: 'charts', component: ProductChartComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
