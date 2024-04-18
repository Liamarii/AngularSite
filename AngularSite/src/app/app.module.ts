import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatsModule } from './modules/cats/cats.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { FormModule } from './modules/form/form.module';
import { JokesModule } from './modules/jokes/jokes.module';
import { ProductsModule } from './modules/products/products.module';
import { TypographyModule } from './modules/typography/typography.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    CatsModule,
    ErrorsModule,
    FormModule,
    JokesModule,
    ProductsModule,
    TypographyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }