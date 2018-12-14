import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AuthInterceptor } from "../shared/auth.interceptor";

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
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
    ]
  })
export class CoreModule{}