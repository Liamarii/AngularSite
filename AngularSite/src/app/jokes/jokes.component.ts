import { Component, OnInit} from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { JokesService } from '../services/jokes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit{
  data: any;
  showPage = false;

  constructor(private jokesService: JokesService, private activatedRoute: ActivatedRoute) {}

  //Ready the service data before showing the page and do it using the activated route to prevent needing an entire page refresh.
  ngOnInit() {
    this.activatedRoute.paramMap.pipe(map(params => params.getAll)).subscribe(async () => {
      await this.GetJoke();
      this.showPage = true;
    });
  }

    async GetJoke(){
      this.data = await firstValueFrom(this.jokesService.getJoke());
    }
}