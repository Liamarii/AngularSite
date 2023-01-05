import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup | any = new FormGroup({});

  ngOnInit() {
    this.form = new FormGroup({
      forename: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      surname: new FormControl('',  [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(90)]),
      address: new FormControl('')
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Form validated!')
    }
  }
}
