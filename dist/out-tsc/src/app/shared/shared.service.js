"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var JSZip = require("jszip");
var CryptoJS = require("crypto-js");
var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.title = 'app';
    }
    /**
    * Code to read the quiz zip file containing the question in encrypted formate and then decrypt in the proper json
    */
    SharedService.prototype.unzip = function () {
        fetch('./assets/536_1.zip')
            .then(function (response) {
            if (response.status === 200 || response.status === 0) {
                return Promise.resolve(response.blob());
            }
            else {
                return Promise.reject(new Error(response.statusText));
            }
        })
            .then(JSZip.loadAsync)
            .then(function (zip) {
            zip.forEach(function (relativePath, zipEntry) {
                var textReader = new FileReader();
                zipEntry.async("blob").then(function (content) {
                    textReader.addEventListener("load", function () {
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
                        var jsonData = decrypted.toString(CryptoJS.enc.Utf8);
                        console.log('Decrypted text: ' + jsonData);
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
    }; // Fn Unzip End
    SharedService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map