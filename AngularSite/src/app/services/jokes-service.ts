import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Joke } from './models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke>{
    return this.http.get<Joke>('https://official-joke-api.appspot.com/random_joke');
  }
}