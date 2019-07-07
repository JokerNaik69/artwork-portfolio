import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageID } from './image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomKittenService {
  private _url: string = '/assets/data/random-kittens.json';

  constructor(private http: HttpClient) { }

  getKittens() {
    return this.http.get<ImageID[]>(this._url);
  }

}
