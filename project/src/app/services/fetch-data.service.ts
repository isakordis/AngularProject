import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  url : string;
  add:string;
  constructor(private http: Http) { 
    this.url ="http://localhost:8080";
  }


  public getJSON(): Observable<any> {
    return this.http.get(this.url)
      .map((res: any) => res.json())
  }

  // public addJson():Observable<any>{
  //   return this.http.post(this.add)
  //   .map
  //  }
  
}
