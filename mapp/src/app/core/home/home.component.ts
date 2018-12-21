import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),

    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),

    trigger('lis', [
      state('static', style({
        opacity: 1
      })),
      transition('static => hover', [
        animate(3000, keyframes([
          style({
            opacity: 0,
            background:'#000',
            offset: 0
          }),
          style({
            opacity: 0.3,
            background:'#000',
            offset: 0.3
          }),
          style({
            opacity: 0.7,
            background:'#000',
            offset: 0.8
          }),
          style({
            opacity: 1,
            background:'#000',
            offset: 1
          })
        ]))
      ]),
      transition('hover => static', [
        animate(3000, keyframes([
          style({
            opacity: 1,
            background:'#000',
            offset: 0
          }),
          style({
            opacity: 0.7,
            background:'#000',
            offset: 0.3
          }),
          style({
            opacity: 0.3,
            background:'#000',
            offset: 0.8
          }),
          style({
            opacity: 0,
            background:'#000',
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  state = 'static';

  constructor() { }

  ngOnInit() {
  }
  onhover(){
    //this.state = "hover";
    this.state == 'static' ? this.state = 'hover' : this.state = 'static';
  }
  onhoverEnd(){
    //this.state = "static";
    this.state == 'hover' ? this.state = 'static' : this.state = 'hover';
  }
}
