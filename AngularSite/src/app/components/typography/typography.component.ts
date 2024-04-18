import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../services/footer-service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit {
  footerText = 'This page is using some of the built in TailwindCSS styling';

  constructor(private footerService: FooterService) {
  }

  ngOnInit(): void {
    this.footerService.setFooterText(this.footerText);
  }
}
