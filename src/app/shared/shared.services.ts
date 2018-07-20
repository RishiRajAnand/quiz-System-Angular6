import { _throw } from 'rxjs/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { environment } from './../../environments/environment';

@Injectable()
export class SharedServices {
  errorData: {};
  headerMenuList;

  constructor(private httpClient: HttpClient) {}

  errorHandeller(error: any) {
    if (error.error !== undefined && error.error.statusCode) {
      /** Catch the error response sent from api and pass the same to component */
      this.errorData = {
        statusCode: error.error.statusCode,
        statusMessage: error.error.statusMessage,
        uiMessage: error.error.uiMessage,
        data: error.error.data
      };
    } else {
      /** Catch the error response from header and pass the same to component */
      this.errorData = {
        statusCode: error.status,
        statusMessage: error.statusText,
        uiMessage: 'System Error.. Please try again',
        data: null
      };
    }

    return this.errorData;
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
}
