import { Action } from "@ngrx/store";

import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from "../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export interface AppState{
    shoppingList:State;
}
export interface State{
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState = {
    ingredients: [
        new Ingredient('apples',5),
        new Ingredient('potatos',10)
      ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
export function shoppingListReduser(state = initialState, action: ShoppingListActions.ShoppingListActions){

    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:[...state.ingredients,action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                    ...state,
                    ingredients: [...state.ingredients,...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updateIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            console.log(updateIngredient);
            console.log(ingredients[action.payload.index]);
            ingredients[action.payload.index] = updateIngredient;
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
    
}