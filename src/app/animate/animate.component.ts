import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceOutUp, flip} from 'ng-animate';

@Component({
  selector: 'app-animate',
  styleUrls: ['./animate.component.scss'],
  template: `
    <button (click)="visible = !visible">visible tumbler</button>
    <div [@bounce] class="rect" *ngIf="visible"></div>
  `,
  animations: [
      trigger('bounce', [
          transition('void => *', useAnimation(bounceOutUp)),
          transition('* => void', useAnimation(flip, {
            params: {
              timing: 3,
              delay: 0.3
            }
          }))
  ])
  ]
})
export class AnimateComponent implements OnInit {

  visible = true;

  constructor() { }

  ngOnInit() {
  }

}
