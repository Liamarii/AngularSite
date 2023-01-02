import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
})

export class FooterBarComponent {
  @Input() message: string | undefined;  
  showFooter = true;
  
  close() {
    this.showFooter = false;
  }
}
