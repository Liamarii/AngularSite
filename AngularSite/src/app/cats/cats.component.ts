import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CatFactsService } from '../services/cat-facts.service';
import { FooterService } from '../services/footer-service';
import { CatFact } from '../services/models/cat-fact';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html'
})
export class CatsComponent implements OnInit {
  data: CatFact | undefined;
  footerText = 'This page will call the service when you view the component without doing a page refresh.';

  constructor(private catFactService: CatFactsService, private footerService: FooterService) { }

  async ngOnInit(): Promise<void> {
    this.footerService.setFooterText(this.footerText);
    await this.GetFact();
  }

  async GetFact() {
    this.data = await firstValueFrom(this.catFactService.getFact());
  }
}