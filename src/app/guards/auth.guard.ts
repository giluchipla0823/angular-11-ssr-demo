import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

  canActivate(): boolean {
    if (isPlatformServer(this.platformId)) {
      return true;
    }

    /*
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);

      return false;
    } */

    /* if (isPlatformBrowser(this.platformId)) {

      console.log('authenticated', {authenticated: this.authService.isAuthenticated()});

      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['login']);

        return false;
      }
    } */

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      
      return false;
    }

    return true;
  }
  
}
