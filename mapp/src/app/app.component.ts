import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loaderFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAytUgpzEZCSKsawIrA19wM-6VjGyFnUig",
      authDomain: "recipes-99c91.firebaseapp.com", 
    })
  }

  onNavigate(feature:string){
    this.loaderFeature = feature;
  }
}
