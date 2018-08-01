import { Injectable } from '@angular/core';
import * as JsStore from 'jsstore';
import * as workerPath from 'file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js';

console.log("worker path ", workerPath);
@Injectable({
  providedIn: 'root'
})
export class IdbConnectionService {

  //constructor() { }

  // this will make sure that we are using one instance or one connection
  // otherwise multiple instance will be created and thus multiple worker and that may create some problems
  static idbCon = new JsStore.Instance(new Worker(workerPath));
}
