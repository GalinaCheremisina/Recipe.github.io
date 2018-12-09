import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Ingredient} from '../shared/ingredient.model';
import { Observable } from 'rxjs';
import * as ShoppingListAction from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  $ingredients : Observable<{ingredients: Ingredient[]}>;

  constructor(private _store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.$ingredients = this._store.select('shoppingList');
  }
  onEditItem(i:number){
    this._store.dispatch(new ShoppingListAction.StartEdit(i));
  }

}
