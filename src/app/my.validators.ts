import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
        return  new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@mail.ru') {
                    resolve({uniqEmail: true});
                } else {
                    resolve(null);
                }

            });
        });
}}
