/**
 * Shopping list.
 * @constructor
 * @param {EventEmitter} ingredientsChenged - The ingredient is chenged.
 * @param {Ingredient[]} ingredients - The array of ingredient.
 * @function {Ingredient[]} getIngredient() - It gives a copy of array of ingredient.
 * @function {} addIngredient - It adds ingredient to ingredients and to a copy array from form
 * @function {} addIngredientsFromRecipe - It adds ingredient to ingredients and to a copy array from recipe
 */
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    
    ingredientsChenged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('potatos',10)
      ];

    /** This is a description of the getIngredient function. */
    getIngredient(): Ingredient[]{
        return this.ingredients.slice();
    }
    /** This is a description of the addIngredient function. */
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChenged.emit(this.ingredients.slice());
    }
    /** This is a description of the addIngredientsFromRecipe function. */
    addIngredientsFromRecipe(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChenged.emit(this.ingredients.slice());
    }
    
}