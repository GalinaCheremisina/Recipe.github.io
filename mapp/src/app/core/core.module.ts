import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeService } from "../services/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../services/auth.service";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
      HeaderComponent,
      HomeComponent
    ],
    imports: [
      CommonModule,
      AppRoutingModule,
      SharedModule
    ],
    exports:[
      HeaderComponent,
      AppRoutingModule
    ],
    providers: [
      RecipeService,
      DataStorageService,
      AuthService
    ]
  })
export class CoreModule{}