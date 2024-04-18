import { NgModule } from '@angular/core';
import { ProductsComponent } from '../../components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductImageComponent } from '../../components/product-image/product-image.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductsComponent, ProductImageComponent],
  imports: [SharedModule, CommonModule],
  exports: [ProductsComponent, ProductImageComponent]
})
export class ProductsModule {
}
