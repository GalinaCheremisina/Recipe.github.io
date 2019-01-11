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

  onSubscribe(form: FormGroup){
    const email = form.value.email;
  }

}
