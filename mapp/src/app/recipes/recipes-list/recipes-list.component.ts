import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRecipe from '../../recipes/store/recipes.redusers';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  $authState: Observable<fromAuth.State>;
  $recipes: Observable<fromRecipe.State>;
  
  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _store:Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.$authState = this._store.select('auth');
    this.$recipes = this._store.select('recipes');
  }

  onNewRecipe(){
    this._router.navigate(['new'],{relativeTo:this._route});
  }

}
