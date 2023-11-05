import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CatsComponent } from './cats/cats.component';
import { JokesComponent } from './jokes/jokes.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { TypographyComponent } from './typography/typography.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductsComponent } from './products/products.component';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CatsComponent,
    JokesComponent,
    FooterBarComponent,
    TypographyComponent,
    FormComponent,
    HighlightDirective,
    ProductsComponent,
    ProductImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
