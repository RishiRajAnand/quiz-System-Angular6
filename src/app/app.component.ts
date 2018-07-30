import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../app/shared/shared.service';
import { IndexedDBService } from './shared/indexed-db.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [IndexedDBService]
})
export class AppComponent {
  constructor(private sharedService: SharedService) {
  
  }
}
