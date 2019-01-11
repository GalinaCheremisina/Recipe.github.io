import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
      HeaderComponent,
      HomeComponent,
      FooterComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AppRoutingModule,
      LightboxModule,
      SharedModule
    ],
    exports:[
      HeaderComponent,
      FooterComponent,
      AppRoutingModule
    ],
    providers: [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
    ]
  })
export class CoreModule{}