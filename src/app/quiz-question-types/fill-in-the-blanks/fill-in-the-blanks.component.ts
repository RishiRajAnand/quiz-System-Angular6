import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'app-fill-in-the-blanks',
  templateUrl: './fill-in-the-blanks.component.html',
  styleUrls: ['./fill-in-the-blanks.component.css']
})
export class FillInTheBlanksComponent implements OnInit {
  constructor(private sharedService: SharedService) {
    this.getJsonFile();
   }

  ngOnInit() {
    this.sharedService.seconds = 0;
    this.sharedService.qnProgress = 0;
  }
getJsonFile() {
  this.sharedService.getJSON().subscribe(data => {
    this.sharedService.qns = data['items'];
    console.log('data>>>', this.sharedService.qns);
});
}
startTimer() {
  this.sharedService.timer = setInterval(() => {
  this.sharedService.seconds++;
  }, 1000);
}
}
