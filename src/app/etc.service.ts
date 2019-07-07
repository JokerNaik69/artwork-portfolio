import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageID } from './image';

@Injectable({
  providedIn: 'root'
})
export class EtcService {
  private _url: string = '/assets/data/etc.json';
  constructor(private http: HttpClient) { }
  getEtc() {
    return this.http.get<ImageID[]>(this._url);
  }
}
