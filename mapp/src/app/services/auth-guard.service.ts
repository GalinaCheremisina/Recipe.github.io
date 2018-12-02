import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private _authService:AuthService){}
    
    canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this._authService.isAuthenticated();
    }

}