import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeState } from '../storage/homeState.provider';

@Injectable()
export class AuthenticatedRouteGuard implements CanActivate {
  constructor(private homeState: HomeState,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.homeState.authentication && this.homeState.channel) {
        return true;
    } else {
        if (this.homeState.channel) {
            this.router.navigate(['/login']);
        } else {
            this.router.navigate(['/home']);
        }
        return false;
    }
  }
}