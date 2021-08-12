import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url: string = "http://localhost:3000/registrations";

  constructor(private http: HttpClient) { }

  getRegistrations(): Observable<Registration[]>{
    return this.http.get<Registration[]>(this._url);
  }
}
