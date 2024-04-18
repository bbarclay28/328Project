import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient){}

  getData(){
    return this.http.get(this.apiUrl);
  }
  
  postData(data: any){
    return this.http.post(this.apiUrl, data);
  }
}