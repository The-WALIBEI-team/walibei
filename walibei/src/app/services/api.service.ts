import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8080/';

  constructor(private _http: HttpClient) { 
    //Headers : {
    // Authorization: `Bearer ${token}`
    //}
  }
 
  GetTypeRequest(url) {
    
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  }
  
  postTypeRequest(url, payload) {

    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
  putTypeRequest(url, payload) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

  deleteTypeRequest(url, payload) {
    return this._http.delete(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

}
