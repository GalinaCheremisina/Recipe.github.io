import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRecipe from '../../recipes/store/recipes.redusers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  authState$: Observable<fromAuth.State>;
  collapsein = false;

  constructor(private _store: Store<fromRecipe.FeatureState>){}

  ngOnInit() {
    this.authState$ = this._store.select('auth');
  }

  onSaveData(){
    this._store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData(){
    this._store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this._store.dispatch(new AuthActions.Logout());
  }

}
