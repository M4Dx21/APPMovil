import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Acces-Control-Allow-Origin' :'*'
      })
  }
    apiURL = 'https://jsonplaceholder.typicode.com'
  constructor(private http:HttpClient) { }
}
