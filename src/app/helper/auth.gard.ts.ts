
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../../../src/app/services/login-service';

@Injectable({ providedIn: 'root' })
export class AuthGard  implements CanActivate{
constructor(
  private router:Router,
private loginservice:LoginService

){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const user = this.loginservice.userValue;
  if (user) {
      // authorised so return true
      return true;
  }

  // not logged in so redirect to login page with the return url
  this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
  return false;
}

}
