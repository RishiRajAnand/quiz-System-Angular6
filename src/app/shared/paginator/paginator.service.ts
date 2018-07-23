import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class PageinatorService {
  getPager(totalItems: number, currentPage = 1, pageSize: number) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    const displayPages = 5;

    let startPage: number;
    let endPage: number;
    if (totalPages <= displayPages) {
      // less than displayPages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than displayPages so calculate start and end pages
      const middlePage = Math.ceil(displayPages / 2);
      if (displayPages % 2 === 0) {
        if (currentPage <= middlePage + 1) {
          startPage = 1;
          endPage = displayPages;
        } else if (currentPage + (middlePage - 1) >= totalPages) {
          startPage = totalPages - (displayPages - 1);
          endPage = totalPages;
        } else {
          startPage = currentPage - middlePage;
          endPage = currentPage + (middlePage - 1);
        }
      } else {
        if (currentPage <= middlePage) {
          startPage = 1;
          endPage = displayPages;
        } else if (currentPage + (middlePage - 1) >= totalPages) {
          startPage = totalPages - (displayPages - 1);
          endPage = totalPages;
        } else {
          startPage = currentPage - (middlePage - 1);
          endPage = currentPage + (middlePage - 1);
        }
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
}
