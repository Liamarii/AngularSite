import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FooterService } from '../../services/footer-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {
  form: FormGroup | any = new FormGroup({});
  footerText = 'This page uses a full page refresh as it uses the bad href method';
  forenameInvalid = false;
  ageInvalid = false;
  surnameInvalid = false;

  constructor(private footerService: FooterService) {
    this.form = new FormGroup({
      forename: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(90), Validators.nullValidator]),
      address: new FormControl('')
    })
  }

  onSubmit() {
    this.form.controls.forename.status === "INVALID";
    this.form.controls.surname.status === "INVALID";
    this.form.controls.age.status === "INVALID";
    if (this.form.valid) {
      alert('Form passed validation!')
    }
  }

  async ngOnInit(): Promise<void> {
    this.footerService.setFooterText(this.footerText);
  }
}
