import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm: FormGroup = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  constructor(private _store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignup(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    this._store.dispatch(new AuthActions.TrySignup({username:email, password:password}));
  }
}
