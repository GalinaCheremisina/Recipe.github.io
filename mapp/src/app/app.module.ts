import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { shoppingListReduser } from './store/shopping-list.reducers';
import { environment } from '../../src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReduser}),
    !environment.production ? StoreDevtoolsModule.instrument() :[]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
