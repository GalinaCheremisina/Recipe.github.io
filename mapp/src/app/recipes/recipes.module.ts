import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item/recipes-item.component";
import { RecipesRoutingModule } from "./recires-routing.module";
import { SharedModule } from "../shared/shared.module";
import { recipesReduser } from "./store/recipes.redusers";
import { RecipeEffects } from "./store/recipes.effects";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipesDetailComponent,
        RecipesListComponent,
        RecipesItemComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        StoreModule.forFeature('recipes',recipesReduser),
        EffectsModule.forFeature([RecipeEffects])
    ]
})
export class RecipesModule{}