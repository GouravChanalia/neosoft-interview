import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DisplayDataService {

  apiPath = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiPath);
  }
}
