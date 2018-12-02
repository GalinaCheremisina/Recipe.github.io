import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id:number;
  editMode = false;
  recipeForm: FormGroup;
  private activeUserSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
              private _recipeService: RecipeService,
              private _router: Router,
              private _authService:AuthService) {
  }

ngOnInit() {
  this._route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  this.activeUserSubscription = this._authService.activeUser.subscribe(
    (value)=>{
      if (!value){this._router.navigate(['../'], {relativeTo: this._route});}
    }
  )
}

onSubmit() {
  if (this.editMode) {
    this._recipeService.updateRecipe(this.id, this.recipeForm.value);
  } else {
    this._recipeService.addRecipe(this.recipeForm.value);
  }
  this.onCancel();
}

onAddIngredient() {
  (<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    })
  );
}

onDeleteIngredient(index: number) {
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
}

onCancel() {
  this._router.navigate(['../'], {relativeTo: this._route});
}

private initForm() {
  let recipeName = '';
  let recipeImagePath = '';
  let recipeDescription = '';
  let recipeIngredients = new FormArray([]);

  if (this.editMode) {
    const recipe = this._recipeService.getRecipesToId(this.id);
    recipeName = recipe.name;
    recipeImagePath = recipe.imagePath;
    recipeDescription = recipe.description;
    if (recipe['ingredients']) {
      for (let ingredienty of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredienty.name, Validators.required),
            'amount': new FormControl(ingredienty.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      }
    }
  }

  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImagePath, Validators.required),
    'description': new FormControl(recipeDescription, Validators.required),
    'ingredients': recipeIngredients
  });
}

ngOnDestroy(){
  this.activeUserSubscription.unsubscribe();
}

}
