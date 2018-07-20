import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedServices } from '../../shared/shared.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  token: any;
  quizData: any;
  constructor(private sharedServices: SharedServices, private httpClient: HttpClient) {
    this.authToken();
   }

  ngOnInit() {
  }
  authToken() {
    const body = {
      'clientCode': 'silverchair001',
      'secretKey': 'n6#YZ3yrR5_!',
      'email': 'kumar.nvs@wolterskluwer.com',
      'firstName': 'Kumar',
      'lastName': 'N',
      'clientUserId': '9789'
    }
    this.sharedServices.getToken(body)
      .subscribe(
        (response) => {
          console.log('authToken>>>>>>', response);
          this.token = response['token'];
        this.getQuiz();
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getQuiz() {
    console.log('token in method', this.token);
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : this.token
     });
    this.sharedServices.getQuizForUser(536, 9789, headers)
    .subscribe(
      (response) => {
        console.log('quizdata>>>>', response);
        this.quizData = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
