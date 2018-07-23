import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const url: string = state.url;
    // console.log('Url: ' + url);

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
