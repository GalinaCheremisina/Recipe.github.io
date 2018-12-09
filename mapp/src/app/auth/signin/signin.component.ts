import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSignip(form: FormGroup){
    const email = form.value.email;
    const password = form.value.password;
    this._authService.signinUser(email, password);
  }

}
