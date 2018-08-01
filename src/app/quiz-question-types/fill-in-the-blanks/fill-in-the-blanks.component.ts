import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { CoreService } from '../../core/core-service/core.service';
@Component({
  selector: 'app-fill-in-the-blanks',
  templateUrl: './fill-in-the-blanks.component.html',
  styleUrls: ['./fill-in-the-blanks.component.css']
})
export class FillInTheBlanksComponent implements OnInit {
  constructor(private sharedService: SharedService, private coreService: CoreService) {
   }

  ngOnInit() {
    this.coreService.seconds = 0;
    this.coreService.qnProgress = 0;
  }
startTimer() {
  this.coreService.timer = setInterval(() => {
  this.coreService.seconds++;
  }, 1000);
}
}
