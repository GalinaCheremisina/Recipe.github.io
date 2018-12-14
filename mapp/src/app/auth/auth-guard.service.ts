import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromAuth from './store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private _store:Store<fromApp.AppState>){}
    
    canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this._store.select('auth')
                    .take(1)
                    .map((authState:fromAuth.State)=>{
                        return authState.authenticated;
                    });
    }

}