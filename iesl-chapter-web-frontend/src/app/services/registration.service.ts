import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url: string = "/assets/json/registration.json";

  constructor(private http: HttpClient) { }

  getRegistrations(): Observable<Registration[]>{
    return this.http.get<Registration[]>(this._url);
  }
}
