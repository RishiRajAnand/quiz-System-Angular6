import { Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  questionList:  Array<any> = [];
  qns: any = [];
  timer: any;
  seconds: any;
  qnProgress: any;
  constructor(private httpClient: HttpClient) { }

  getQuestionDetails(questionIndex: number) {
    console.log('intialised questions', this.questionList, questionIndex);
    return this.questionList[questionIndex];
  }
  initialiseQuestionsList(): Observable<any> {
     return this.httpClient.get('./assets/Questions.json').map((data) => {
      this.questionList = data['items'];
      return data['items'];
    });
  }
  getJSON() {
    return this.httpClient.get('./assets/Questions.json').map((data) => {
      
      return data;
    });
}
getUserToken() {
  const currentUserDetails = JSON.parse(localStorage.getItem('currentUser'));
  const token = currentUserDetails.accessToken;
  return token;
}
getToken(body) {
  return this.httpClient.post('http://quizzing-qa.hlrpbooks.com/api/authenticate', body).map((data) => {
    return data;
  });
}

getQuizForUser(quizId, clientUserId, headers) {
  return this.httpClient.get('http://quizzing-qa.hlrpbooks.com/api/tests/' + quizId + 
  '?clientUserId=' + clientUserId + '&summary=false', {
    headers
  }).map((data) => {
    return data;
  });
}

quizInformationForUser(quizId, quizVersion, instanceId, clientUserId, headers) {
  return this.httpClient.get('http://quizzing-qa.hlrpbooks.com/api/tests/' + quizId + '/' +
  quizVersion + '/instances/' + instanceId + '?clientUserId=' + clientUserId + '&summary=false', {
    headers
  }).map((data) => {
    return data;
  });
}

quizZipDownload(quizId, quizVersion, instanceId, page, perPage, clientUserId, headers) {
  return this.httpClient.get('http://quizzing-qa.hlrpbooks.com/api/tests/' + quizId + '/' + quizVersion + '/instance/' + instanceId +
   '/itemslist?page=' + page + '&perPage=' + perPage + '&clientUserId=' + clientUserId, {
    headers
  }).map((data) => {
    return data;
  });
}

displayTotalTimeElapsed() {
  return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
}

displayTimeElapsed() {
  return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
}
}
