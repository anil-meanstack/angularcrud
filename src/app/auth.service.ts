import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
     let userString = JSON.parse(localStorage.getItem('vex') || '{}' )
    
    const isLogedin = userString.is_login
    
    if( isLogedin ){
      return true
    }else {
      //alert("you are not loged in..")
      return false;
    }
  }
  
}
