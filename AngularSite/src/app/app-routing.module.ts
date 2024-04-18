import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';
import { CatsComponent } from './components/cats/cats.component';
import { TypographyComponent } from './components/typography/typography.component';
import { FormComponent } from './components/form/form.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: TypographyComponent, pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent },
  { path: 'form', component: FormComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }