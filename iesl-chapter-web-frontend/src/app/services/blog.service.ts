import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog'; // Assuming you have a BlogPost model

@Injectable({ 
  providedIn: 'root'
})
export class BlogService {

  private _url: string = "assets/json/blog.json"; // Adjust the path to match your blog JSON file

  constructor(private http: HttpClient) { }

  getArticles(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this._url);
  }

}
