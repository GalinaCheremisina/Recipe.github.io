import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from '../store/auth.reducers';
import * as AuthAction from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm: FormGroup = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  constructor(private _store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

  onSignip(form: FormGroup){
    const email = form.value.email;
    const password = form.value.password;
    this._store.dispatch(new AuthAction.TrySignin({username:email,password: password}));
  }

}
