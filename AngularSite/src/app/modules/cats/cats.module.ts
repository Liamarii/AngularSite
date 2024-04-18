import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from '../../components/cats/cats.component';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CatsComponent,
    HighlightDirective
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class CatsModule {
}
