import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AboutComponent } from './about/about.component';
import { CatsComponent } from './cats/cats.component';
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutComponent,
    CatsComponent,
    JokesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
