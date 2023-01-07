import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent {
  form: FormGroup | any = new FormGroup({});

  onSubmit() {
    if (this.form.valid) {
      alert('Form passed validation!')
    }
  }

  constructor() {
    this.form = new FormGroup({
      forename: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(90)]),
      address: new FormControl('')
    })
  }
}
