import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

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
}
