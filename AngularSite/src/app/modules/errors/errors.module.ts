import { NgModule } from '@angular/core';
import { ErrorsComponent } from '../../components/errors/errors.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [SharedModule]
})
export class ErrorsModule {
}
