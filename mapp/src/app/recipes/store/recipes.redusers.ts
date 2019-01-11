import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";

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
       'Ginger chicken',
       '<p>Take the chicken and all the ingredients mentioned above (except oil, green chillies and curry leaves) in a mixing bowl.</p><p>Mix it thoroughly, coating the masalas nicely with the chicken. You can marinate it for sometime or you can go ahead without marinating it.</p><p>Heat the coconut oil in a pan, add the chicken pieces in small portions and fry for 5 minutes on low flame stirring in between and another 5 mins on high flame untill golden and brown.</p><p>In the same oil fry the Curry leaves and green chillies one after the other.</p><p>Garnish the chicken with the fried chillies and curry leaves and serve as a starter or side dish.</p>',
       '/assets/img/recipes/ch1.jpg',
       [
        new Ingredient("Chicken", 300 ,"Gms"),
        new Ingredient("Ginger Garlic Paste", 2, "Tsp"),
        new Ingredient("Kashmiri Red Chilly Powder", 1, "Tsp"),
        new Ingredient("Turmeric Powder", 1, "Tsp"),
        new Ingredient("Cumin Powder", 1, "Tsp"),
        new Ingredient("Coriander Powder", 1, "Tsp"),
        new Ingredient("Garam Masala Powder", 1, "Tsp"),
        new Ingredient("Egg White", 1, "Nos"),
        new Ingredient("Cornflour", 2, "Tsp"),
        new Ingredient("Coconut Oil", 1 ,"Cups"),
        new Ingredient("Green Chilly", 3, "Nos")
       ]),
    new Recipe(
       'Sev Tomato (Traditional Kathiyawadi Sabji)',
       "<p>Cut tomatoes in to small pieces</p><p>Heat oil in a pan</p><p>Add mustard seeds n cumin</p><p>As this splutters add hing n garlic paste n saute for 1/2 minute n add tomatoes n stir</p><p>Cover n cook for 1 minute </p><p>Stir n add salt 1/2 cup water mix n cover</p><p>Cook for 5 minutes</p><p>Add remaining water red chilli pwd dhaniya jeera pwd sugar cover n let it cook for 1 minute n switch off the gas </p><p>Add sev mix n cover for 5 minutes</p><p>Serve in plate n garnish with corriander</p>",
       '/assets/img/recipes/xhdpi.jpg',
       [
           new Ingredient("Tomatoes", 5),
           new Ingredient("Besan Sev", 1,"Cups"),
           new Ingredient("Water", 1, "Cups"),
           new Ingredient("Turmeric Pwd", 1),
           new Ingredient("Red Chilli Pwd", 1, "Tsp"),
           new Ingredient("Dhaniya Jeera ( Corriander Cumin )Pwd", 1, "Tsp"),
           new Ingredient("Salt", 1, "Tsp"),
           new Ingredient("Sugar", 2, "Tsp"),
           new Ingredient("Garlic Paste", 1, "Tsp"),
           new Ingredient("Oil", 2, "Tsp"),
           new Ingredient("Mustard Seeds", 1, "Tsp"),
           new Ingredient("Cumin Seeds", 1, "Tsp"),
           new Ingredient("Hing", 1, "Tsp"),
           new Ingredient("Corriander Leaves Chopped", 2, "Tsp"),
       ]),
    new Recipe(
          'Sponge Cake',
          "<p>Pre-Heat the Oven at 180°C and also grease 8 inch round cake tin with butter and keep aside.</p><p>Sieve together all purpose flour, baking powder and baking soda and keep aside.</p><p>In a bowl break 4 eggs, add vanilla essence and beat the eggs on medium high speed until the mixture is thick and double in volume or form a ribbon like consistency.</p><p>In another bowl beat butter and sugar together until soft and creamy.</p><p>Add the sifted all purpose flour, baking powder and baking soda into the bowl containing the creamy butter sugar mixture.</p><p>Now mix the wet ingredients with the dry ingredients using cut and fold method and form a smooth lump free batter.</p><p>You can add milk as required if the batter is thick.</p><p>Pour the batter in a greased cake tin and bake it at 180°C for 30 minutes.</p><p>Once the cake is done, insert a toothpick if it comes clean then the cake has baked perfectly.</p><p>Allow the cake to cool down completely, cut into pieces and enjoy.</p>",
          '/assets/img/recipes/food4.jpg',
          [
              new Ingredient("All Purpose FlouR", 1,"Cups"),
              new Ingredient("Powdered Sugar", 1, "Cups"),
              new Ingredient("Butter", 100, "Gms"),
              new Ingredient("Eggs", 1),
              new Ingredient("Milk ", 1, "Cups"),
              new Ingredient("Baking Powder", 1, "Tsp"),
              new Ingredient("Baking Soda", 10, "Gms")
          ]),
    new Recipe(
        'Brain Cakes',
        '<p>Preheat oven to 180C/160C fan-forced. Line a 12-hole, 1/3 cup-capacity muffin pan with paper cases.</p><p>Using an electric mixer, beat butter, vanilla and sugar until light and fluffy. Add eggs, 1 at a time, beating after each addition. Add flour and milk. Stir to combine.</p><p>Spoon 1/4 cup mixture into each paper case. Bake for 25 minutes or until a skewer inserted in the centre of 1 cake comes out clean. Stand cakes in pan for 2 minutes. Transfer to a wire rack to cool.</p><p>Make Pink icing: Using an electric mixer, beat butter until pale and fluffy. Gradually add icing sugar mixture and milk, beating constantly until combined. Tint pale pink using pink food colouring.</p><p>Spread cakes with icing to form a mound. Using a butter knife, mark a line through the icing, in the middle of each cake. Spoon remaining icing into a piping bag fitted with a 8mm round nozzle. Using the picture as a guide, pipe icing onto each cake to form brains.</p>',
        '/assets/img/recipes/cakes.jpg',
            [
                new Ingredient("Butter", 125,"Gms"),
                new Ingredient("Caster Sugar", 1, "Cups"),
                new Ingredient("Eggs", 2),
                new Ingredient("Vanilla Extract", 1, "Tsp"),
                new Ingredient("Milk ", 1, "Cups"),
                new Ingredient("Self-Raising Flour, Sifted", 5, "Cups")
            ]),
    new Recipe(
        'Healthy Sandwich',
        '<p>Heat the oil in a pan and add cumin seeds.</p><p>When the seeds start to crackle add green chillies, carrots, green peas and salt.</p><p>Stir the combination and cook for 2 to 3 minutes.</p><p>Spread this mixture on the 2 bread slices accordingly and cover it with remaining blood slices.</p><p>Cut it into two and you can top it with sauce before tasting.</p>',
        '/assets/img/recipes/food5.jpg',
            [
                new Ingredient("Brown Bread Slice", 4,"Nos"),
                new Ingredient("Parboiled And Finely Chopped Carrots", 2, "Cups"),
                new Ingredient("Boiled And Slightly Mashed Green Peas", 50, "Gms"),
                new Ingredient("Cumin Seeds", 1, "Tsp"),
                new Ingredient("Finely Chopped Green Chillies", 1, "Tsp"),
                new Ingredient("Chopped Coriander", 2, "Tsp"),
                new Ingredient("Salt- To Taste", 1, "Tsp"),
            ]),
    new Recipe(
        'Coffee Shake',
        '<p>Blend Together Coffee Powder, Sugar, Milk And Vanilla-Ice Cream To A Smooth Consistancy</p><p>Drop Boost Powder On Sides Of The Glass</p><p>Pour The Mix To Glass And Serve Chilled</p>',
        '/assets/img/recipes/food6.jpg',
            [
                new Ingredient("Coffee Powder", 1,"Tsp"),
                new Ingredient("Vanilla Ice Cream", 150, "Gms"),
                new Ingredient("NOVA Milk", 1, "Cups"),
                new Ingredient("Sugar", 2, "Tsp"),
                new Ingredient("Boost ", 1, "Tsp")
            ]),    
    new Recipe(
        'Pasta',
        '<p>Take a  container add 1/2 ltr. Water in it  and cook pasta in it</p><p>It will be ready in 10 min . Now take  out pasta  from it .</p><p>Take oil in a pan and add chopped onion , chilli , tomato in it . When it gets brown add cooked pasta in it .now add coriander leaves ,salt and timato sauce in it and mix it well</p><p>Now serve it .. yummy!!</p>',
        '/assets/img/recipes/food7.jpg',
            [
                new Ingredient("Pasta", 250,"Gms"),
                new Ingredient("Onion Chopped", 1),
                new Ingredient("Tomatos Chopped", 2),
                new Ingredient("Green Chillis Chopped", 2),
                new Ingredient("Chopped Corainder Leaves", 1,"Tsp"),
                new Ingredient("Oil", 1,"Tsp"),
                new Ingredient("Salt", 1,"Tsp"),
                new Ingredient("Tomato Sauce", 1,"Tsp")
            ]),
    new Recipe(
        'Apple Smoothie',
        '<p>Take a  container add 1/2 ltr. Water in it  and cook pasta in it</p><p>It will be ready in 10 min . Now take  out pasta  from it .</p><p>Take oil in a pan and add chopped onion , chilli , tomato in it . When it gets brown add cooked pasta in it .now add coriander leaves ,salt and timato sauce in it and mix it well</p><p>Now serve it .. yummy!!</p>',
        '/assets/img/recipes/food8.jpg',
            [
                new Ingredient("Apple", 1,"Gms"),
                new Ingredient("Milk", 1, "Cups"),
                new Ingredient("Cook Oats", 2),
                new Ingredient("Honey", 2,"Tsp"),
                new Ingredient("Icecube", 5)
            ]),
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