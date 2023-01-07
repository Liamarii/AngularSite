import { describe, expect } from '@jest/globals';
import { TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('MyComponent', () => {
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent]
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
    component.form.forename = 'abc';
    component.form.surname = 'def';
    component.form.age = 22;
    component.form.address = 'ghi';
    expect(component.form.valid).toBeFalsy();
  });
});
