import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

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
}
