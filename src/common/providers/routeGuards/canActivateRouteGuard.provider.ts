import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { HomeState } from '../storage/homeState.provider';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private homeState: HomeState,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.homeState.channel) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}