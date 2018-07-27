import { Component,OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { IndexedDBService } from './shared/indexed-db.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [IndexedDBService]
})
export class AppComponent {
    title = 'app';
    constructor( private appService : SharedService, private indexedDB : IndexedDBService){}

    ngOnInit(){
        this.appService.unzip().subscribe(data => {
            console.log(data);
        });
    }
}
