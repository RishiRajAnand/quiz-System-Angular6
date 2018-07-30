import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
@Input() dataMessage: any;
  constructor() { }

  ngOnInit() {
  }

}
