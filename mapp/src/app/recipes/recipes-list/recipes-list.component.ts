import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[];
  
  constructor(private _recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
  }

}
