import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedServices } from '../app/shared/shared.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  token: any;
  constructor (private sharedServices: SharedServices, private httpClient: HttpClient) { }
ngOnInit () {
}
  quizInformation() {
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : this.token
     });
    this.sharedServices.quizInformationForUser(536, 4, 1668, 9789, headers)
    .subscribe(
      (response) => {
        console.log('information>>>>', response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  downloadQuiz() {
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : this.token
     });
    this.sharedServices.quizZipDownload(536, 4, 1668, 1, 5, 9789, headers)
    .subscribe(
      (response) => {
        console.log('download>>>>', response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
