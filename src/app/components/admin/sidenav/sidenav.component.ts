import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  // navigate(uri: string): void {
  //   this.router.navigate(['admin', { outlets: { admin: [uri] } }], {
  //     skipLocationChange: false,
  //   });
  // }
}
