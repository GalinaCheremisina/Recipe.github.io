import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  subscribeForm = new FormGroup({
    email : new FormControl('',[Validators.email])
  });

/** This is a description of the onSubscribe function. Data sending function. */
  onSubscribe(form: FormGroup){
    const email = form.value.email;
  }
}
