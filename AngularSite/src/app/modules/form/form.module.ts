import { NgModule } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormComponent],
  imports: [SharedModule, ReactiveFormsModule, CommonModule]
})
export class FormModule {
}
