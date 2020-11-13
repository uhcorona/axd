import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../../shared/baseURL';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public http: HttpClient) { }
  messages() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(baseURL + 'messages', httpOptions);
  }
  postmessage(message) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(baseURL + 'messages', message, httpOptions);
  }
}
