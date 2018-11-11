import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private _shoppingListService:ShoppingListService) { }

  /*This is a description of the inAddItem function. It adds a new ingredient to ShoppingListService */
  inAddItem(){
    const intName = this.nameInputRef.nativeElement.value;
    const intAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(intName,intAmount);
    this._shoppingListService.addIngredient(newIngredient);
  }

}