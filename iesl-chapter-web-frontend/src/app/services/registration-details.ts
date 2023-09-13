import { RegistrationDetails } from './../models/registration-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ 
  providedIn: 'root'
})
export class RegistrationDetailService {

  private _url: string = "assets/json/registration-details.json";

  constructor(private http: HttpClient) { }

  getRegistrationDetails(): Observable<RegistrationDetails[]>{
    return this.http.get<RegistrationDetails[]>(this._url);
  }

}
