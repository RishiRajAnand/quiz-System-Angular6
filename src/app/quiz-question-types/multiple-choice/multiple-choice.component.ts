import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { ActivatedRoute } from '@angular/router';
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
  questionDetails = {
    question : ''
  };
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('learn the resolver', this.route.snapshot.data);
    this.initialiseData(this.route.snapshot.data);
    this.sharedService.currentState.subscribe(message => this.message = message);
    this.sharedService.currentState.subscribe(clearEntries => this.clearEntries = clearEntries);
  }

  initialiseData(data) {
    this.questionDetails.question = data.message.promptText;
  }
  // Function for clearing user response
  clearUserAction(e) {
    console.log('event', e.srcElement.value);
  }
}
