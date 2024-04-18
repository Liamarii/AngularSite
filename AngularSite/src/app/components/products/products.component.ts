import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  footerText = 'This page is using a child component to emit the  images.';

  constructor(private footerService: FooterService) { }

  async ngOnInit(): Promise<void> {
    this.footerService.setFooterText(this.footerText);
  }
  selectedProduct: string = '';
  productImage: string = '';

  selectProduct(product: string) {
    this.selectedProduct = product;
  }

  onImageReceived(imageName: string) {
    this.productImage = imageName;
  }
}