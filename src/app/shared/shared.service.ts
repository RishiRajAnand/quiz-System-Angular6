import { _throw } from 'rxjs/observable/throw';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
=======
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';
import * as CryptoJS from 'crypto-js';

>>>>>>> a3281f653b06eced3f9152a54e346f112c842c69
@Injectable({
    providedIn: 'root'
})
export class SharedService {
<<<<<<< HEAD
qns: any = [];
timer: any;
seconds: any;
qnProgress: any;
  constructor(private httpClient: HttpClient) {
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
=======

    zipfile: any;
    jsonData: any;
    title = 'app';

    constructor( private http : HttpClient  ) { }

    /**
    * Code to read the quiz zip file containing the question in encrypted formate and then decrypt in the proper json
    */
    unzip() {
        fetch('./assets/536_1.zip')
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
                            console.log(textReader.result);
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
                    }
                });  
            })
            .then(function success(text) { }, function error(e) {
                console.log(e);
            });
    }// Fn Unzip End
>>>>>>> a3281f653b06eced3f9152a54e346f112c842c69
}
