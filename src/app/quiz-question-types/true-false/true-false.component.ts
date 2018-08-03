import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
  }
}
