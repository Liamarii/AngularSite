import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CatFactsService } from '../services/cat-facts.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html'
})

export class CatsComponent implements OnInit{
  data: any;

  constructor(private catFactService: CatFactsService) {}

  ngOnInit(): void {
    this.catFactService.getFact().subscribe(data => { this.data = data });
  };

    async GetFact(){
      this.data = await firstValueFrom(this.catFactService.getFact());
    }
}