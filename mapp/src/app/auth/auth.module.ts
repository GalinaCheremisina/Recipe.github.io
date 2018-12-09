import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent
    ],
    imports:[
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}