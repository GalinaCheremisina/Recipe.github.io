import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private _authService:AuthService) { }

  ngOnInit(){
    this._route.params.subscribe(
      (parameter:Params)=>{
        this.recipeSelectedId = +parameter['id'];
        this.recipeSelected = this._recipeService.getRecipesToId(this.recipeSelectedId);
      }
    )
  }
  /** Function adds recipe's ingredient to RecipeService. */
  onAddToShoppingList(){
    this._recipeService.addToShoppingList(this.recipeSelected.ingredients);
  }

  onRecipeEdit(){
    this._router.navigate(['edit'],{relativeTo:this._route});
  }

  onDeleteEdit(){
    this._recipeService.deleteRecipe(this.recipeSelectedId);
    this._router.navigate(["recipes"]);
  }

}
