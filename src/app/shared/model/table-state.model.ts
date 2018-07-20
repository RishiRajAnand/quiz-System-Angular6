import { PagerData } from '../paginator/index';

export class TableState {
  pager: PagerData;
  search: any;
  sort: { predicate: string; reverse: boolean; param: string };
  dataPerpage: number;

  constructor(searchData, sortData, dataPerPage) {
    this.pager = new PagerData();
    this.search = searchData;
    this.sort = sortData;
    this.dataPerpage = dataPerPage;
  }
}
