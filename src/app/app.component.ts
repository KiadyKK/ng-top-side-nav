import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  trigramme: string;
  isLoggedIn: boolean = true;

  private theme: string = 'light';

  constructor(
    // private storageService: StorageService,
    private readonly bnIdle: BnNgIdleService
  ) {}

  ngOnInit(): void {
    // this.isLoggedIn = this.storageService.getItem('authorization');

    // if (this.isLoggedIn) {
    //   const trigramme = this.storageService.getItem('trigramme');
    //   this.trigramme = trigramme;
    // }

    if (typeof document !== 'undefined') {
      this.bnIdle.startWatching(3600).subscribe((isTimedOut: boolean) => {
        if (isTimedOut) {
          this.logout();
          location.reload();
        }
      });
    }

    if (typeof window !== 'undefined') {
      if (localStorage.getItem('theme') === 'dark') {
        this.setDarkMode();
        this.theme = 'light';
      } else {
        this.setLightMode();
        this.theme = 'light';
      }
    }
  }

  setDarkMode(): void {
    document.querySelector('body')!.setAttribute('data-theme', 'dark');
  }

  setLightMode(): void {
    document.querySelector('body')!.setAttribute('data-theme', 'light');
  }

  toggleTheme(): void {
    if (this.theme === 'light') {
      this.theme = 'dark';
      this.setDarkMode();
    } else {
      this.theme = 'light';
      this.setLightMode();
    }
    localStorage.setItem('theme', this.theme);
  }

  logout(): void {
    // this.storageService.clean();
  }
}
