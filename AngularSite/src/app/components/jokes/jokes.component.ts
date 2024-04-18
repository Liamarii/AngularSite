import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { JokesService } from '../../services/jokes-service';
import { FooterService } from '../../services/footer-service';
import { Joke } from '../../services/models/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html'
})

export class JokesComponent implements OnInit {
  data: Joke | undefined;
  showPage = false;
  footerText = 'This page will wait for a service response before displaying the page without doing a page refresh.';

  constructor(private jokesService: JokesService, private footerService: FooterService) { }

  //Ready the service data before showing the page and do it using the activated route to prevent needing an entire page refresh.
  async ngOnInit() {
    this.footerService.setFooterText(this.footerText);
    await this.GetJoke();
    this.showPage = true;
  }

  async GetJoke() {
    this.data = await firstValueFrom(this.jokesService.getJoke());
  }
}