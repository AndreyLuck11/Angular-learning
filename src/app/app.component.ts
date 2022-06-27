import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required], MyValidators.uniqEmail),
      password: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Киев', Validators.required),
      }),
      skills: new FormArray([])
    });

  }

  submit() {
    console.log('Form', this.form);
    const formData = {...this.form.value};
    console.log('FormData', formData);
    this.form.reset();
  }

  setCapital() {
      const cityMap = {
        ru: 'Москва',
        ua: 'Киев',
        by: 'Минск'
      };
      const cityKey = this.form.get('address').get('country').value;
      console.log(cityKey);
      const city = cityMap[cityKey];
      console.log(city);
      this.form.patchValue({
        address: {city}
      });

  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}

