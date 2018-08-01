import { SharedService } from '../shared/shared.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  message: boolean;
  clearEntries: boolean;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentState.subscribe(message => this.message = message);
    this.sharedService.currentState.subscribe(clearEntries => this.clearEntries = clearEntries);
    console.log('object show', this.clearEntries);
  }

  showingAnswer() {
    this.sharedService.showAnswer(this.message);
  }
  hidingAnswer() {
    this.sharedService.hideAnswer(this.message);
  }
clearingResponse() {
  this.sharedService.clearResponseAnswer(this.clearEntries);
  if (this.clearEntries === true) {
    this.sharedService.clearResponseAnswerFalse(this.clearEntries);
  }
}
}
