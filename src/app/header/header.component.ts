import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { WkQuiz, Quiz } from '../model/wk-quiz';
import { IndexedDBService } from '../core/indexed-db/idb-model.service';
import { SharedService } from '../shared/shared.service';
import { CoreService } from '../core/core-service/core.service';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Observer } from 'rxjs/Observer';
// import { SnakeCase } from 'node_modules/lodash';
// var SnakeCase = require('lodash.snakecase');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  timer = Observable.interval(1000);
  totalTime = 0;
  private service: IndexedDBService;
  currentIndex = 0;
  questionDetails: Array<any> = [];
  clearInterval: Subscription;
  _configure: any;
  _headerData: Array<any> = [];

  get configure(): any {
    return this._configure;
  }
  @Input('configure') set configure(value: any) {
    if (value) {
      this._configure = value;
      this.questionDetails = this.initialiseQuestionDetails(value.totalQuestions);
      console.log('all questions', this.questionDetails);
      console.log('header cofogurew', value);
    } else {
      this._configure = null;
    }
  }

  get headerData(): Array<any> {
    return this._headerData;
  }
  @Input('headerData') set headerData(value: Array<any>) {
    if (value) {
      this._headerData = value;
      console.log('headers data', value);
    } else {
      console.log('i am null', value);
      this._headerData = null;
    }
  }


  // token: any;
  // quizData: any;
  // quizId = '536';
  // quizVersion = '536';
  // instanceId = '536';
  // page = '536';
  // perPage = '536';
  // clientUserId = '536';
  // cmn_asset_type: any = [];


  constructor(public sharedService: SharedService, public coreService: CoreService, service: IndexedDBService) {
    // this.service = service;
    // this.authToken();
  }

  ngOnInit() {
    this.clearInterval = this.timer.subscribe(t => {

      if (this.questionDetails[0]) {

        this.questionDetails[0].questionTime++;
        console.log('new time', this.questionDetails[0].questionTime);
      }
      // if(self.stopPooling){obj.unsubscribe();}
    });
    this.timer.subscribe(t => {

      this.totalTime++;
    });
    // this.coreService.seconds = 0;
    // this.coreService.qnProgress = 0;
    // this.startTimer();
  }
  initialiseQuestionDetails(numberOfQuestions: number): Array<any> {
    const questionsDetails = [];
    for (let i = 0; i < numberOfQuestions; i++) {
      console.log(i);
      questionsDetails.push({
        questionTime: 0,
        isAnswered: false,
        isCorrect: false,
      });
    }
    return questionsDetails;
  }

  changeQuestion(questionIndex: number) {
    this.currentIndex = questionIndex;
    this.clearInterval.unsubscribe();
    console.log('last logged time', this.questionDetails[questionIndex].questionTime);

    console.log('clock started');
    this.clearInterval = this.timer.subscribe(t => {

      if (this.questionDetails[questionIndex]) {

        this.questionDetails[questionIndex].questionTime++;
        console.log('new time', this.questionDetails[questionIndex].questionTime);
      }
      // if(self.stopPooling){obj.unsubscribe();}
    });
    // this.clearInterval = setInterval(() => {
    //   if (this.questionDetails[questionIndex]) {
    //     this.questionDetails[questionIndex].questionTime++;
    //   }
    // }, 1000);
  }
  // Function to get autorized token
  // authToken() {
  //   const body = {
  //     'clientCode': 'silverchair001',
  //     'secretKey': 'n6#YZ3yrR5_!',
  //     'email': 'kumar.nvs@wolterskluwer.com',
  //     'firstName': 'Kumar',
  //     'lastName': 'N',
  //     'clientUserId': '9789'
  //   }
  //   this.coreService.getToken(body)
  //     .subscribe(
  //       (response) => {
  //         console.log('Response = > ', response);
  //         this.token = response['token'];

  //         // Generating the Header for API call
  //         console.log('token in method', this.token);
  //         const headers: any = new HttpHeaders({
  //           'Content-Type': 'application/json',
  //           Authorization: this.token
  //         });

  //         // Calling the Get quiz api to Retrieve the particular quiz details by Quiz Id.
  //         this.getQuiz(headers);
  //         //var zipfile = this.getZipDownload(this.quizId, this.quizVersion, this.instanceId, this.page, this.perPage, this.clientUserId, headers);
  //         //console.log(zipfile);
  //         // this.coreService.unzipJson();
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  /**
   * Function to retrieve the particular quiz details by Quiz Id.
   * @param headers
   */
  // getQuiz(headers) {
  //   this.coreService.getQuizForUser(536, 9789, headers)
  //     .subscribe(
  //       (response) => {
  //         console.log('quizdata>>>>', response);
  //         this.quizData = response;
  //         // localStorage.setItem('quizData', JSON.stringify(response));
  //         // const localObject = localStorage.getItem('quizData');
  //         // this.quizData = JSON.parse(localObject);
  //         this.insertAssetTypess();
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  /**
   * Functoin to download quiz in json format along with the  asset in Zip format
  //  * @param quizId 
  //  * @param quizVersion 
  //  * @param instanceId 
  //  * @param page 
  //  * @param perPage 
  //  * @param clientUserId 
  //  * @param headers 
  //  */
  // getZipDownload(quizId, quizVersion, instanceId, page, perPage, clientUserId, headers) {

  //   return this.coreService.quizZipDownload(quizId, quizVersion, instanceId, page, perPage, clientUserId, headers)
  //     .subscribe(
  //       (response) => {
  //         this.quizData = response;
  //         console.log('quizZip>>>>', response);
  //         localStorage.setItem('quizData', JSON.stringify(response));
  //         const localObject = localStorage.getItem('quizData');
  //         this.quizData = JSON.parse(localObject);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  /**
   * Function to start question timer 
   */
  // startTimer() {
  //   this.coreService.timer = setInterval(() => {
  //     this.coreService.seconds++;
  //   }, 1000);
  // } 

  // displayQuizQnsTimeElapsed() {
  //   return Math.floor(0 / 3600) + ':' + Math.floor(0 / 60) + ':' + Math.floor(15 % 60);
  // }
  // displayGivenQuizTimeElapsed() {
  //   return Math.floor(0 / 3600) + ':' + Math.floor(2 / 60) + ':' + Math.floor(0 % 60);
  // }


  // insertAssetTypess() {
  //   //console.log ('samllllll' + SnakeCase);
  //   //var jsonData = JSON.parse(JSON.stringify(this.quizData));
  //   this.service.insertData('qti_test', this.quizData).
  //     then((insertData: Quiz[]) => {
  //       if (insertData.length > 0) {
  //         //this.cmn_asset_type.push(insertAssetType[0]);
  //         // this.clearNewStudent();

  //       }
  //     }).catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  // }
}
