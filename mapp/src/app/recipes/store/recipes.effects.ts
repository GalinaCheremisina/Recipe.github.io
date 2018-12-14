import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipes.actions';
import * as fromRecipe from './recipes.redusers';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
      .ofType(RecipeActions.FETCH_RECIPES)
      .switchMap((action: RecipeActions.FetchRecipes) => {
        return this._httpClient.get<Recipe[]>('https://recipes-99c91.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
          })
      })
      .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
          };
        }
      );
  
    @Effect({dispatch: false})
    recipeStore = this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .withLatestFrom(this._store.select('recipes'))
      .switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://recipes-99c91.firebaseio.com/recipes.json', 
                                        state.recipes, {reportProgress: true});
        return this._httpClient.request(req);
      });
  
    constructor(private actions$: Actions,
                private _httpClient: HttpClient,
                private _store: Store<fromRecipe.FeatureState>) {}
  }
  