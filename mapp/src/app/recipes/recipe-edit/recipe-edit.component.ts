import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRecipe from '../store/recipes.redusers';
import * as RecipeAction from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _store: Store<fromRecipe.FeatureState>) {
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
  }

/** This is a description of the onSubmit function. Data sending function. */
  onSubmit() {
    if (this.editMode) {
      this._store.dispatch(new RecipeAction.UpdateRecipes(
                  {index: this.id, updatedRecipe: this.recipeForm.value})
                  );
    } else {
      this._store.dispatch(new RecipeAction.AddRecipes(this.recipeForm.value));
    }
    this.onCancel();
  }

/** This is a description of the onAddIngredient function. */
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        'step': new FormControl()
      })
    );
  }

/** This is a description of the onDeleteIngredient function. */
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

/** This is a description of the onCancel function. */
  onCancel() {
    this._router.navigate(['../'], {relativeTo: this._route});
  }

/** This is a description of the initForm function. Editing recipe. */
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this._store.select('recipes')
          .take(1)
          .subscribe((recipeState:fromRecipe.State)=>{
              const recipe = recipeState.recipes[this.id];
              recipeName = recipe.name;
              recipeImagePath = recipe.imagePath;
              recipeDescription = recipe.description;
              if (recipe['ingredients']) {
                for (let ingredienty of recipe.ingredients) {
                  if(!ingredienty.step){ ingredienty.step =''; }
                  recipeIngredients.push(
                    new FormGroup({
                      'name': new FormControl(ingredienty.name, Validators.required),
                      'amount': new FormControl(ingredienty.amount, [
                        Validators.required,
                        Validators.pattern(/^[1-9]+[0-9]*$/)
                      ]),
                      'step': new FormControl(ingredienty.step)
                    })
                  );
                }
              }
          })
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

/** This is a description of the getControls function. Get data from form. */
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
