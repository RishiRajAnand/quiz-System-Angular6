import { Injectable } from '@angular/core';
import { CoreService } from '../core/core-service/core.service';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class RouteResolver implements Resolve<any> {
  constructor(private coreService: CoreService) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (route.queryParamMap.get('questionIndex')) {
      return this.coreService.getQuestionDetails(Number(route.queryParamMap.get('questionIndex')));
    }
  }
}