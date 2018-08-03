import { SharedService } from '../shared/shared.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  message: boolean;
  clearEntries: boolean;
  index = 0;

  currentIndex = 0;

  _totalQuestions: number;
  get totalQuestions(): number {
    return this.totalQuestions;
  }
  @Input('totalQuestions') set totalQuestions(value: number) {
    if (value) {
      this._totalQuestions = value;
    } else {
      this._totalQuestions = null;
    }
  }
  constructor(private sharedService: SharedService) { }
  @Output() questionChanged = new EventEmitter<any>();
  // @Output() decreaseIndex = new EventEmitter<any>();
  ngOnInit() {
    this.sharedService.currentState.subscribe(message => this.message = message);
    this.sharedService.currentState.subscribe(clearEntries => this.clearEntries = clearEntries);
    console.log('object show', this.clearEntries);
  }
  valueIncreased() {
    if (this.currentIndex !== this._totalQuestions - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.questionChanged.emit(this.currentIndex);
    }
  }
  valueDecreased() {
    if (this.currentIndex !== 0) {
      this.currentIndex = this.currentIndex - 1;
      this.questionChanged.emit(this.currentIndex);
    }
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
