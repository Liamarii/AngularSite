import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from '../services/footer-service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  router: Router;

  constructor(router: Router, private footerService: FooterService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.footerService.setFooterText('The button is using the built in Angular router to navigate rather than a href')
  }

  goToJokesPage() {
    this.router.navigate(['/jokes']);
  }
}

