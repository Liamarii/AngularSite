import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JokesComponent } from './jokes/jokes.component';
import { CatsComponent } from './cats/cats.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  { path: 'jokes', component: JokesComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'typography', component: TypographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
