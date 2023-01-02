import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  displayMenu = true;
  smallScreen = false;
  pages = ['about','cats','jokes'];
  title = "AngularSite"

  ToggleMenuVisibility(){
    this.displayMenu = !this.displayMenu;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(["(min-width: 640px)"]).subscribe((result: BreakpointState) => {
      if (result.matches) {
         this.displayMenu = true;
         this.smallScreen = false;
      }
      else{
        this.smallScreen = true;
      }
    });
  }
}
