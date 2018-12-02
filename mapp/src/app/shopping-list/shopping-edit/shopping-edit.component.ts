import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

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

  constructor(private _shoppingListService:ShoppingListService) { }

  ngOnInit(){
    this.subscription = this._shoppingListService.startedEdit
    .subscribe(
      (index:number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this._shoppingListService.getIngredientToIndex(index);
        this.form.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount,
        })
      }
    );
  }

  /*This is a description of the onAddItem function. It adds a new ingredient to ShoppingListService */
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this._shoppingListService.updateIngredient(this.editedItemIndex,newIngredient)
    }else
      this._shoppingListService.addIngredient(newIngredient);
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    this._shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}