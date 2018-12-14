import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from "../../shared/ingredient.model";

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
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){

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
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
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