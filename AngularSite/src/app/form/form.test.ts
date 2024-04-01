import { describe, expect } from '@jest/globals';
import { TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FooterBarComponent } from '../footer-bar/footer-bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('MyComponent', () => {
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FormComponent, FooterBarComponent]
    });

    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('Compontent can be created', () => {
    expect(component).toBeTruthy();
  });

  it('Form is invalid before input', () => {
    component.onSubmit();
    expect(component.form.valid).toBeFalsy();
  });

  it('Form is valid when populated correctly', () => {
    component.form.get('forename')?.setValue('Ralph');
    component.form.get('surname')?.setValue('Wiggum');
    component.form.get('age')?.setValue(12);
    expect(component.form.valid).toBeTruthy();
  });
});
