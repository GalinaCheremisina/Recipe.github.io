import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';
import * as ShoppingListAction from '../../store/shopping-list.actions';
import * as fromShoppingList from '../../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  @ViewChild('form') form:NgForm;
  private subscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private _store: Store<fromShoppingList.AppState>) { }

  ngOnInit(){
    this.subscription = this._store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.form.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            })
          } else {
            this.editMode = false;
          }
        }
      );
  }

  /*This is a description of the onAddItem function. It adds a new ingredient to ShoppingListService */
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this._store.dispatch(new ShoppingListAction.UpdateIngredient(
        {index:this.editedItemIndex, 
         ingredient: newIngredient}));
    }else
      this._store.dispatch(new ShoppingListAction.AddIngredient(newIngredient));
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    this._store.dispatch(new ShoppingListAction.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(){
    this._store.dispatch(new ShoppingListAction.StopEdit());
    this.subscription.unsubscribe();
  }

}