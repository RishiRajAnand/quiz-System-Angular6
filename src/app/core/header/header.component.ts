import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { IndexedDBService } from '../../shared/indexed-db.service';
import { WkQuiz , Quiz } from '../../model/wk-quiz';
//import { SnakeCase } from 'node_modules/lodash';
var SnakeCase = require('lodash.snakecase');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private service: IndexedDBService;     

    token: any;
    quizData: any;
    quizId = '536';
    quizVersion = '536';
    instanceId = '536';
    page = '536';
    perPage = '536';
    clientUserId = '536';
    cmn_asset_type : any = [];


    constructor(private sharedService: SharedService,service: IndexedDBService) {
        this.service = service;
        this.authToken(); 
    }

  ngOnInit() {
      this.sharedService.seconds = 0;
      this.sharedService.qnProgress = 0;
      this.startTimer();
  }

  authToken() {
      const body = {
        'clientCode': 'silverchair001',
        'secretKey': 'n6#YZ3yrR5_!',
        'email': 'kumar.nvs@wolterskluwer.com',
        'firstName': 'Kumar',
        'lastName': 'N',
        'clientUserId': '9789'
      }
    
    this.sharedService.getToken(body)
      .subscribe(
        (response) => {
          console.log('Response = > ', response);
          this.token = response['token'];

          // Generating the Header for API call
          console.log('token in method', this.token);
          const headers: any = new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization : this.token
          });

          // Calling the Get quiz api to Retrieve the particular quiz details by Quiz Id.
          this.getQuiz(headers);
          //var zipfile = this.getZipDownload(this.quizId, this.quizVersion, this.instanceId, this.page, this.perPage, this.clientUserId, headers);
          //console.log(zipfile);
         // this.sharedService.unzipJson();
          
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /**
   * Function to retrieve the particular quiz details by Quiz Id.
   * @param headers
   */
  getQuiz(headers) {
    
    this.sharedService.getQuizForUser(536, 9789, headers)
    .subscribe(
      (response) => {
        console.log('quizdata>>>>', response);
        this.quizData = response;
        // localStorage.setItem('quizData', JSON.stringify(response));
        // const localObject = localStorage.getItem('quizData');
        // this.quizData = JSON.parse(localObject);
        this.insertAssetTypess();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Functoin to download quiz in json format along with the  asset in Zip format
   * @param quizId 
   * @param quizVersion 
   * @param instanceId 
   * @param page 
   * @param perPage 
   * @param clientUserId 
   * @param headers 
   */
  getZipDownload(quizId, quizVersion, instanceId, page, perPage, clientUserId, headers) {
    
    return this.sharedService.quizZipDownload(quizId, quizVersion, instanceId, page, perPage, clientUserId, headers)
    .subscribe(
      (response) => {
        this.quizData = response;
        console.log('quizZip>>>>', response);
        localStorage.setItem('quizData', JSON.stringify(response));
        const localObject = localStorage.getItem('quizData');
        this.quizData = JSON.parse(localObject);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Function to start question timer 
   */
  startTimer() {
    this.sharedService.timer = setInterval(() => {
    this.sharedService.seconds++;
    }, 1000);
  }


  insertAssetTypess() {
      //console.log ('samllllll' + SnakeCase);
      //var jsonData = JSON.parse(JSON.stringify(this.quizData));
      this.service.insertData('qti_test',this.quizData).
      then((insertData: Quiz[]) => {
      if (insertData.length > 0) {
        //this.cmn_asset_type.push(insertAssetType[0]);
       // this.clearNewStudent();
       
      }
      }).catch(error => {
      console.error(error);
      alert(error.message);
      });
  }
}
