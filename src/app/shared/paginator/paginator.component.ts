import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PagerData } from '../index';

@Component({
  selector: 'wk-paginator',
  templateUrl: 'paginator.component.html'
})
export class PaginatorComponent implements OnInit {
  @Input() pagerDetails: PagerData;
  @Input() show: boolean;
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  pageChange(pageNumber: number) {
    this.goToPage.emit(pageNumber);
  }
}
