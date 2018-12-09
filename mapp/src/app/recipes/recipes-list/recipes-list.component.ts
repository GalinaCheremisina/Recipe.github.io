import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipes:Recipe[];
  subscription: Subscription;
  
  constructor(
    private _recipeService:RecipeService,
    private _router:Router,
    private _route:ActivatedRoute,
    private _authService:AuthService) { }

  ngOnInit() {
    this.subscription = this._recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this._recipeService.getRecipes();
  }

  onNewRecipe(){
    this._router.navigate(['new'],{relativeTo:this._route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isAuthenticated():boolean {
    return this._authService.isAuthenticated();
  }
}
