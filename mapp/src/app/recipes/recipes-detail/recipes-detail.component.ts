import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../recipe.model';
import 'rxjs/add/operator/take';
import * as ShoppingListAction from '../../shopping-list/store/shopping-list.actions';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRecipe from '../../recipes/store/recipes.redusers';
import * as RecipeActions from '../../recipes/store/recipes.actions';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{

  recipes$:Observable<fromRecipe.State>;
  recipeSelected:Recipe;
  recipeSelectedId:number;
  authState$: Observable<fromAuth.State>;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _store: Store<fromRecipe.FeatureState>) { }

  ngOnInit(){
    this.authState$ = this._store.select('auth');
    this._route.params.subscribe(
      (parameter:Params)=>{
        this.recipeSelectedId = +parameter['id'];
        this.recipes$ = this._store.select('recipes');
      }
    )
  }
  
  onAddToShoppingList(){
    this._store.select('recipes')
        .take(1)
        .subscribe((recipeState:fromRecipe.State)=>{
          this._store.dispatch(new ShoppingListAction.AddIngredients(
            recipeState.recipes[this.recipeSelectedId].ingredients)
          );
        })
  }

  onRecipeEdit(){
    this._router.navigate(['edit'],{relativeTo:this._route});
  }

  onDeleteEdit(){
    this._store.dispatch(new RecipeActions.DeleteRecipes(this.recipeSelectedId));
    this._router.navigate(["recipes"]);
  }

}
