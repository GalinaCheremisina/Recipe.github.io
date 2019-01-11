import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private _lightbox: Lightbox){}

/** This is a description of the open function. Open popup window. */
  open(src:string): void {
    this._lightbox.open([{src: src, caption: '', thumb: ''}]);
  }

/** This is a description of the close function. Close popup window. */
  close(): void {
    this._lightbox.close();
  }
}
