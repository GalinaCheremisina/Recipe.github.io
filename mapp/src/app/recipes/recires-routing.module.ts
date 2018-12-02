import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../services/auth-guard.service";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";

const recipesRoutes:Routes = [
    {path:'recipes', component:RecipesComponent,children:[
        {path:'', component:RecipeStartComponent},
        {path:'new', component:RecipeEditComponent, canActivate:[AuthGuard]},
        {path:':id', component:RecipesDetailComponent},
        {path:':id/edit', component:RecipeEditComponent, canActivate:[AuthGuard]}
      ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(recipesRoutes)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModule{}