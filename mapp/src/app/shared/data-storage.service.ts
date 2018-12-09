import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
      private _http: HttpClient, 
      private _recipeService: RecipeService,
      private _authService: AuthService) {}

  storeRecipes() {
    const token = this._authService.getToken();
    return this._http
        .put(
            'https://recipes-99c91.firebaseio.com/recipes.json?auth='+ token, 
            this._recipeService.getRecipes()
            );
  }

  getRecipes() {
    const token = this._authService.getToken();
    this._http.get<Recipe[]>('https://recipes-99c91.firebaseio.com/recipes.json?auth='+ token)
      .map(
        (recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this._recipeService.setRecipes(recipes);
        }
      );
  }
}
