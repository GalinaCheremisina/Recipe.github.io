import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe:Recipe;
  constructor(private _recipeService:RecipeService) { }

  ngOnInit() {
  }

  /** This is a description of the onSelected function. It gives emmit to RecipeService */
  onSelected(){
    this._recipeService.recipeSelected.emit(this.recipe);
  }
}
