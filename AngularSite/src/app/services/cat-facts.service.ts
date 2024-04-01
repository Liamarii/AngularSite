import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CatFact } from './models/cat-fact';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }

  getFact(): Observable<CatFact> {
    return this.http.get<CatFact>('https://catfact.ninja/fact');
  }
}