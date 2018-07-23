import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
  /**
   * Function to get the menu define for the loggedin user role
   */
  getHederMenuForUserRole() {
    const authToken = this.getUserToken();
    const auth = btoa(`${environment.apiKey}:${environment.sharedSecret}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
      'X-Access-Token': authToken
    });

    return this.httpClient
      .get<any>(`${environment.authAPIUrl}menu/get`, {
        headers
      })
      .pipe(
        map(response => {
          const apiResponse = response;

          return apiResponse;
        }),
        catchError((error: any) => {
          this.errorData = this.errorHandeller(error);

          return Observable.throw(this.errorData);
        })
      );
  }
  /**
   * Function to get the menu define for the loggedin user role
   */
  getStewardDetails() {
    const stewardDetails = localStorage.getItem('stewardDetails');
    if (stewardDetails) {
      return of(JSON.parse(stewardDetails));
    } else {
      // Will get from server later in future
      const tempDetails = [{ stewardId: 1, stewardName: 'Nursing Standard' }];
      localStorage.setItem('stewardDetails', JSON.stringify(tempDetails));

      return of(tempDetails);
    }
  }
  cleanObject(obj, keys) {
    if (obj instanceof Array) {
      obj.forEach(item => {
        this.cleanObject(item, keys);
      });
    } else if (typeof obj === 'object') {
      Object.getOwnPropertyNames(obj).forEach(key => {
        if (keys.indexOf(key) !== -1) {
          delete obj[key];
        } else {
          this.cleanObject(obj[key], keys);
        }
      });
    }
  }
}
