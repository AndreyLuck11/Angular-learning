import {Component} from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
// import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;
  constructor() {
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);

      setTimeout(() => {
        observer.next(2);
      }, 1800);

      setTimeout(() => {
        observer.error('Something is wrong');
      }, 1600);

    });




    this.sub = stream$
        .subscribe(
            value => console.log('Next:', value),
            error => console.log('Error', error),
            () => console.log('Complete')
        );
  }

  stop() {
    this.sub.unsubscribe();
  }

  // constructor() {
  //   const intervalStream$ = interval(1000);
  //
  //   this.sub = intervalStream$
  //       .pipe(
  //           filter(value => value % 2 === 0),
  //         map((value) => `"Mapped value ${value}"`)
  //       )
  //       .subscribe((value) => {
  //     console.log(value);
  //   });
  // }
  //
  // stop() {
  //   this.sub.unsubscribe();
  // }
}
