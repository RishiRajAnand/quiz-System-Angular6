import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
@Input() dataMessage: any;
message: boolean;
clearEntries: boolean;
userInput: any = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentState.subscribe(message => this.message = message);
    this.sharedService.currentState.subscribe(clearEntries => this.clearEntries = clearEntries);
  }
  // Function for clearing user response
clearUserAction(e) {
 console.log('event', e.srcElement.value);
}
}
