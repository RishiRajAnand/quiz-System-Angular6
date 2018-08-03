import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { CoreService } from '../../core/core-service/core.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fill-in-the-blanks',
  templateUrl: './fill-in-the-blanks.component.html',
  styleUrls: ['./fill-in-the-blanks.component.css']
})
export class FillInTheBlanksComponent implements OnInit {

  questionDetails = {
    question : ''
  };

  constructor(private sharedService: SharedService, private coreService: CoreService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    console.log('learn the resolver', this.route.snapshot.data);
    this.initialiseData(this.route.snapshot.data);
    this.coreService.seconds = 0;
    this.coreService.qnProgress = 0;
  }

  initialiseData(data) {
    this.questionDetails.question = data.message.promptText;
  }
startTimer() {
  this.coreService.timer = setInterval(() => {
  this.coreService.seconds++;
  }, 1000);
}
}
