import { Component } from '@angular/core';
import { FooterService } from '../services/footer-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  selectedProduct: string = '';
  productImage: string = '';
  footerText = 'This page is using a child component to emit the  images.';

  constructor(footerService: FooterService) {
    footerService.setFooterText(this.footerText);
  }

  selectProduct(product: string) {
    this.selectedProduct = product;
  }

  onImageReceived(imageName: string) {
    this.productImage = imageName;
  }
}