import { _throw } from 'rxjs/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import * as JSZip from 'jszip';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    qns: any = [];
    timer: any;
    seconds: any;
    qnProgress: any;
    zipfile: any;
    jsonData: any;
    title = 'app';

    private hideShow = new BehaviorSubject(false);
    currentState = this.hideShow.asObservable();
    private clearResponse = new BehaviorSubject(true);
    currentresponse = this.clearResponse.asObservable();

    constructor( private httpClient : HttpClient  ) { }
    
    getJSON() {
        return this.httpClient.get('./assets/Questions.json').map((data) => {
          return data;
        });
    }

    showAnswer(state: boolean) {
        this.hideShow.next(true);
    }

    hideAnswer(state: boolean) {
        this.hideShow.next(false);
    }

    clearResponseAnswer(state: boolean) {
        this.clearResponse.next(true);
    }

    clearResponseAnswerFalse(state: boolean) {
        this.clearResponse.next(false);
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

    /**
    * Code to read the quiz zip file containing the question in encrypted formate and then decrypt in the proper json
    */
    unzipJson() {
       return fetch('./assets/536_1.zip')
            .then(function(response) {
                if (response.status === 200 || response.status === 0) {
                    return Promise.resolve(response.blob());
                } else {
                    return Promise.reject(new Error(response.statusText));
                }
            })
            .then(JSZip.loadAsync)
            .then(function(zip) {
                zip.forEach(function(relativePath, zipEntry) {
                    var textReader = new FileReader();
                    zipEntry.async("blob").then(function(content) {
                        textReader.addEventListener("load", function() {
                            console.log('sabal >>> ' + textReader.result);
                            var original_text = textReader.result;
                            var key = CryptoJS.enc.Utf8.parse("Impelsys$QP2018$");
                            var iv = CryptoJS.enc.Utf8.parse('Impelsys@QP2018@');
                            var decrypted = CryptoJS.AES.decrypt(textReader.result, key, {
                                keySize: 128 / 8,
                                iv: iv,
                                mode: CryptoJS.mode.CBC,
                                padding: CryptoJS.pad.Pkcs7
                            });
                            console.info('Given text :' + original_text);
                            let jsonData = decrypted.toString(CryptoJS.enc.Utf8);
                            console.log('Decrypted text: '+ jsonData);
                            jsonData = JSON.parse(jsonData);
                            console.log(jsonData);
                        }, false);
                        textReader.readAsText(content);
                    }); 
                });
            })
            .then(function success(text) { }, function error(e) {
                console.log(e);
            });
    }// Fn Unzip End
}