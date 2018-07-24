import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
qns: any = [];
timer: any;
seconds: any;
qnProgress: any;
  constructor(private http: HttpClient) {
   }
getJSON() {
  return this.http.get('./assets/Questions.json').map((data) => {
    return data;
  });
}
}
