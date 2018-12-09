import { Component, Input, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListAction from '../../store/shopping-list.actions';
import * as fromShoppingList from '../../store/shopping-list.reducers';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{

  recipeSelected:Recipe;
  recipeSelectedId:number;

  constructor(
    private _recipeService:RecipeService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _authService:AuthService,
    private _store: Store<fromShoppingList.AppState>) { }

  ngOnInit(){
    this._route.params.subscribe(
      (parameter:Params)=>{
        this.recipeSelectedId = +parameter['id'];
        this.recipeSelected = this._recipeService.getRecipesToId(this.recipeSelectedId);
      }
    )
  }
  
  onAddToShoppingList(){
    this._store.dispatch(new ShoppingListAction.AddIngredients(this.recipeSelected.ingredients));
  }

  onRecipeEdit(){
    this._router.navigate(['edit'],{relativeTo:this._route});
  }

  onDeleteEdit(){
    this._recipeService.deleteRecipe(this.recipeSelectedId);
    this._router.navigate(["recipes"]);
  }

  isAuthenticated():boolean {
    return this._authService.isAuthenticated();
  }
}
