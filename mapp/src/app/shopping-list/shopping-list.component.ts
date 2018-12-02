import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription:Subscription;

  constructor(private _shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredient();
    this.subscription = this._shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }
  onEditItem(i:number){
    this._shoppingListService.startedEdit.next(i);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
