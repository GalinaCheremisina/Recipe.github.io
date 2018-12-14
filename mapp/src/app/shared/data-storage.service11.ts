import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../services/recipe.service11';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) { 
  }

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer afdklasflaldf');

    // return this.httpClient.put('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });
    const req = new HttpRequest('PUT', 
            'https://recipes-99c91.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes(), 
            {reportProgress: true}
            );
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://recipes-99c91.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
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
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
