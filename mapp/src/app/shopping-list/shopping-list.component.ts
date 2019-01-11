import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient} from '../shared/ingredient.model';
import * as ShoppingListAction from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  $ingredients : Observable<{ingredients: Ingredient[]}>;

  constructor(private _store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.$ingredients = this._store.select('shoppingList');
  }

/** This is a description of the onEditItem function. Editing recipe. */
  onEditItem(i:number){
    this._store.dispatch(new ShoppingListAction.StartEdit(i));
  }
}
