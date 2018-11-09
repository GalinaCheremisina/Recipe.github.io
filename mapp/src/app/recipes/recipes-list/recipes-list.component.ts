import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Жареный на сковороде сыр с конфитюром',"description",'/assets/img/recipes/res1.jpg'),
    new Recipe('Жареный на сковороде сыр с конфитюром',"description",'/assets/img/recipes/res1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
