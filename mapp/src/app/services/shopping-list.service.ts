/**
 * Shopping list.
 * @constructor
 * @param {Subject} ingredientsChanged - The ingredient is chenged.
 * @param {Ingredient[]} ingredients - The array of ingredient.
 * @function {Ingredient[]} getIngredient() - It gives a copy of array of ingredient.
 * @function {} addIngredient - It adds ingredient to ingredients and to a copy array from form
 *  @function {} updateIngredient - It updates ingredient to ingredients and to a copy array from form
 * @function {} addIngredientsFromRecipe - It adds ingredient to ingredients and to a copy array from recipe
 */
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEdit = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('potatos',10)
      ];

    /** This is a description of the getIngredient function. */
    getIngredient(): Ingredient[]{
        return this.ingredients.slice();
    }
    /** This is a description of the getIngredient function. */
    getIngredientToIndex(index:number): Ingredient{
        return this.ingredients[index];
    }
    /** This is a description of the addIngredient function. */
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    /** This is a description of the addIngredientsFromRecipe function. */
    addIngredientsFromRecipe(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    /** This is a description of the updateIngredient function. */
    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    /** This is a description of the deleteIngredient function. */
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}