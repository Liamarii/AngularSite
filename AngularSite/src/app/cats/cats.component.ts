import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CatFactsService } from '../services/cat-facts.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit{
  data: any;
  showPage = false;

  constructor(private catFactService: CatFactsService) {}

  ngOnInit(): void {
    this.catFactService.getFact().subscribe(data => { this.data = data });
    window.addEventListener('load', () => {
      this.showPage = true;  
    }
  )};

    async GetFact(){
      this.data = await firstValueFrom(this.catFactService.getFact());
    }
}