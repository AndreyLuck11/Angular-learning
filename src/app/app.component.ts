import {Component} from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';
import {boxAnimation} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

    animate() {
        this.boxState = this.boxState === 'end' ? 'start' : 'end';
        // setInterval(() => {
        //     this.boxState = this.boxState === 'end' ? 'start' : 'end';
        // }, 200);
    }
}
