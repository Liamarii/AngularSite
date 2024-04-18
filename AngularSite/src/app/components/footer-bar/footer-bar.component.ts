import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooterService } from '../../services/footer-service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
})
export class FooterBarComponent implements OnDestroy {
  message: string | null = "";
  private subscription: Subscription;

  constructor(private footerService: FooterService) {
    this.subscription = this.footerService.getFooterText().subscribe(text => {
      this.message = text;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Unsubscribe from the subscription to avoid memory leaks
  }
}
