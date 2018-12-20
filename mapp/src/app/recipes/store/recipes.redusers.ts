import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";

import * as RecipesActions from './recipes.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State
  }

export interface State {
    recipes: Recipe[]
};
const initialState :State = {
    recipes : [
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
]}
export function recipesReduser(state = initialState,action:RecipesActions.RecipeActions){

    switch(action.type){
        case (RecipesActions.SET_RECIPES):
            return {
                ...state,
                recipes : [...action.payload]
            };
        case (RecipesActions.ADD_RECIPE):
            return {
                ...state,
                recipes : [...state.recipes,action.payload]
            };
        case (RecipesActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
              ...recipe,
              ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
              ...state,
              recipes: recipes
            };
        case (RecipesActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            return {
              ...state,
              recipes: oldRecipes
            };
          default:
            return state;
    }
}