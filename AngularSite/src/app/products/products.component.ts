import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  selectedProduct: string = '';
  productImage: string = '';

  selectProduct(product: string) {
    this.selectedProduct = product;
  }

  onImageReceived(imageName: string) {
    this.productImage = imageName;
  }
}