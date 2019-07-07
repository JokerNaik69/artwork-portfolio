import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageID } from './image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommissionsService {
  private _url: string = '/assets/data/commissions.json';

  constructor(private http: HttpClient) { }

  getCommissions() {
    return this.http.get<ImageID[]>(this._url);
  }

}
