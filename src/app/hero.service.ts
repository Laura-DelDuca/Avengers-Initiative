import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHeroes } from './heroes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _url: string='assets/data/heroes.json';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<IHeroes[]> {
    return this.http.get<IHeroes[]>(this._url);
  }
}
