import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { CatsComponent } from './cats/cats.component';
import { TypographyComponent } from './typography/typography.component';
import { FormComponent } from './form/form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/typography', pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent },
  { path: 'form', component: FormComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
