import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export default class NavigationBarComponent implements OnDestroy {
  displayMenu = true;
  smallScreen = false;
  pages = ['form', 'typography', 'cats', 'jokes', 'products', 'error'];
  title = "AngularSite";
  private breakpointSubscription: Subscription;

  ToggleMenuVisibility() {
    this.displayMenu = !this.displayMenu;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointSubscription = this.breakpointObserver.observe(["(min-width: 640px)"]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.displayMenu = true;
        this.smallScreen = false;
      }
      else {
        this.smallScreen = true;
      }
    });
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
