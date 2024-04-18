import { NgModule } from '@angular/core';
import { TypographyComponent } from '../../components/typography/typography.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TypographyComponent],
  imports: [SharedModule]
})
export class TypographyModule {
}
