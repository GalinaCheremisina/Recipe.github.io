import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private _lightbox: Lightbox){}

  open(src:string): void {
    this._lightbox.open([{src: src, caption: '', thumb: ''}]);
  }

  close(): void {
    this._lightbox.close();
  }
}
