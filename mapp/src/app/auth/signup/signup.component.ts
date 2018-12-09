import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    this._authService.signupUser(email, password);
  }
}
