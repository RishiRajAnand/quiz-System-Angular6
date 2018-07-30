<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../app/shared/shared.service';
=======
import { Component,OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { IndexedDBService } from './shared/indexed-db.service';
>>>>>>> a3281f653b06eced3f9152a54e346f112c842c69

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [IndexedDBService]
})
export class AppComponent {
<<<<<<< HEAD
  constructor(private sharedService: SharedService) {
  
  }
  
=======
    title = 'app';
    constructor( private appService : SharedService, private indexedDB : IndexedDBService){}

    ngOnInit(){
        this.appService.unzip().subscribe(data => {
            console.log(data);
        });
    }
>>>>>>> a3281f653b06eced3f9152a54e346f112c842c69
}
