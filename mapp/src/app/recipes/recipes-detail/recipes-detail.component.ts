import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent{

  @Input() recipe:Recipe;

  constructor(private _recipeService:RecipeService) { }

  /** Function adds recipe's ingredient to RecipeService. */
  onAddToShoppingList(){
    this._recipeService.addToShoppingList(this.recipe.ingredient);
  }

}
