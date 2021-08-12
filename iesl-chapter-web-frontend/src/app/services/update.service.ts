import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Update } from '../models/update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private _url: string = "http://localhost:3000/updates";

  constructor(private http: HttpClient) { }

  getRegistrations(): Observable<Update[]>{
    return this.http.get<Update[]>(this._url);
  }

}
