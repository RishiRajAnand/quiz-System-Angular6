import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wkpc-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() spinnerType: string;

  constructor() {}

  ngOnInit() {}
}
