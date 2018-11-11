/**
 * Recipe's service.
 * @constructor
 * @param {EventEmitter} recipeSelected - The recipe is chenged.
 * @param {Recipe[]} recipes - The array of recipe.
 * @function {Recipe[]} getRecipes() - It gives a copy of array of recipe.
 * @function {} addToShoppingList - It adds ingredient to shopping list(ShoppingListService)
 */
import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter();

    private recipes:Recipe[] = [
         new Recipe(
            'Жареный на сковороде сыр с конфитюром',
            "description",
            '/assets/img/recipes/res1.jpg',
            [
                new Ingredient("Meat",500),
                new Ingredient("Potato",10)
            ]),
         new Recipe(
            'Запеченный на сковороде сыр с конфитюром',
            "description",
            '/assets/img/recipes/res1.jpg',
            [
                new Ingredient("Meat",100),
                new Ingredient("Potato",15)
            ])
    ];

    constructor(private _shoppingListService:ShoppingListService){}

    /** This is a description of the getRecipes function. */
    getRecipes():Recipe[]{
      return this.recipes.slice();
    }
    /** This is a description of the addToShoppingList function. */
    addToShoppingList(ingredients:Ingredient[]){
        this._shoppingListService.addIngredientsFromRecipe(ingredients);
    }
}