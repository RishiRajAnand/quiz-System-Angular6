import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: any;
  quizData: any;
  constructor(private sharedService: SharedService) {
    this.authToken();
   }

  ngOnInit() {
    this.sharedService.seconds = 0;
    this.sharedService.qnProgress = 0;
    this.startTimer();
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
    this.sharedService.getToken(body)
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
    this.sharedService.getQuizForUser(536, 9789, headers)
    .subscribe(
      (response) => {
        console.log('quizdata>>>>', response);
        localStorage.setItem('quizData', JSON.stringify(response));
        const localObject = localStorage.getItem('quizData');
        this.quizData = JSON.parse(localObject);
      },
      (error) => {
        console.log(error);
      }
    );
  }
startTimer() {
this.sharedService.timer = setInterval(() => {
this.sharedService.seconds++;
}, 1000);
}
}
