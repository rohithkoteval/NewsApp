import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=388f6c471b2f4b63a5451560fd9a5966";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=388f6c471b2f4b63a5451560fd9a5966";

  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }
}
