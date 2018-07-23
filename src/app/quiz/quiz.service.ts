import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as Flow from '@flowjs/flow.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { SharedServices } from '../shared/shared.services';
import { TableState } from './../shared/index';
import { QuizDetail } from '../quiz/index';

@Injectable()
export class QuizService {
  errorData = {};
  httpOptions: any;

  constructor(
    private httpClient: HttpClient,
    private utilityFunction: SharedServices
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  /**
   * Function to get the asset details from the server.
   */
  getQuizDetails(
    quizId: number,
    version: number = null,
    assetCode: string = null
  ): Observable<QuizDetail> {
    let url = `http://qa-quizzingplatform.impelsys.com/api/`;
    let params = new HttpParams();

    if (assetCode != null) {
      url += `code/${quizId}/properties`;
    } else if (quizId != null && version != null) {
      url += `id/${quizId}/properties`;
      params = params.set('version', version.toString());
    } else {
      url += `id/${quizId}/properties`;
    }

    return this.httpClient.get<any>(url, { params }).pipe(
      map(response => {
        return response.data;
      }),
      catchError((error: any) => {
        this.errorData = this.utilityFunction.errorHandeller(error);

        return Observable.throw(this.errorData);
      })
    );
  }
}