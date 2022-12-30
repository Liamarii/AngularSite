import { Component, OnInit} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { JokesService } from '../services/jokes-service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit{
  data: any;
  showPage = false;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {
   this.GetJoke()
    window.addEventListener('load', () => {
      this.showPage = true;  
    }
  )};

    async GetJoke(){
      this.data = await firstValueFrom(this.jokesService.getJoke());
    }
}