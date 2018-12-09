/**
 * Recipe's service.
 * @constructor
 * @param {Recipe[]} recipes - The array of recipe.
 * @function {Recipe[]} getRecipes() - It gives a copy of recipe array.
 * @function {Recipe} getRecipesToId(id) - It gives a recipe with "id" id.
 * @function {void} setRecipes(recipes:Recipe[]) - It updates the recipes from the server.
 * @function {void} addRecipe(recipe: Recipe) - It adds new recipe to recipe array.
 * @function {void} updateRecipe(index: number, newRecipe:Recipe) - It updates the recipes in recipe array.
 * @function {void} deleteRecipe(index: number) - It deletes the recipes from the recipe array.
 * @function {} addToShoppingList - It adds ingredient to shopping list(ShoppingListService)
 */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();
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

    constructor(){}

    /** This is a description of the getRecipes function. */
    getRecipes():Recipe[]{
        return this.recipes.slice();
      }
    /** This is a description of the getRecipesToId function. */
    getRecipesToId(id:number):Recipe{
        return this.recipes[id];
    }
    /** This is a description of the setRecipes function. */
    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    /** This is a description of the addRecipe function. */
    addRecipe(recipe: Recipe):void {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    /** This is a description of the updateRecipe function. */
    updateRecipe(index: number, newRecipe:Recipe):void {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    /** This is a description of the deleteRecipe function. */
    deleteRecipe(index: number):void {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}