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
    zipfile: any;
    jsonData: any;
    title = 'app';

    private hideShow = new BehaviorSubject(false);
    currentState = this.hideShow.asObservable();
    private clearResponse = new BehaviorSubject(true);
    currentresponse = this.clearResponse.asObservable();

    constructor( private httpClient: HttpClient  ) { }
    // Function to show answer event
    showAnswer(state: boolean) {
        this.hideShow.next(true);
    }
    // Function to hide answer event
    hideAnswer(state: boolean) {
        this.hideShow.next(false);
    }
    // Function to clear answer event
    clearResponseAnswer(state: boolean) {
        this.clearResponse.next(true);
    }
// Function to clear answer event
    clearResponseAnswerFalse(state: boolean) {
        this.clearResponse.next(false);
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