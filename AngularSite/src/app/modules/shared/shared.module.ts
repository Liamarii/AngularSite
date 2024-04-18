import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from '../../components/footer-bar/footer-bar.component';
import NavigationBarComponent from '../../components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterBarComponent, NavigationBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterBarComponent, NavigationBarComponent]
})
export class SharedModule { }
