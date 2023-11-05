import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-image',
  template: '',
})
export class ProductImageComponent {
  @Input() productName: string = '';
  @Output() productFileLocation: EventEmitter<string> = new EventEmitter();

  private products: { [key: string]: string } = {
    bus: '../../assets/images/bus.jpg',
    car: '../../assets/images/car.jpg'
  };

  ngOnChanges() {
    if (this.productName in this.products) {
      this.productFileLocation.emit(this.products[this.productName]);
    }
  }
}
