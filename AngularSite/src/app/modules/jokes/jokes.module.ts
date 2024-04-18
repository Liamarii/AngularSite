import { NgModule } from '@angular/core';
import { JokesComponent } from '../../components/jokes/jokes.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [JokesComponent],
  imports: [SharedModule, CommonModule]
})
export class JokesModule {
}
