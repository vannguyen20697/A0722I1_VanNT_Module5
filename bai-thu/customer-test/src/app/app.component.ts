import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-test';
  constructor(private router: Router) {
  }

  reload(navLink: string) {
    const currentUrl = this.router.url;
    if (currentUrl === navLink) {
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => this.router.navigateByUrl(currentUrl));
    }
  }
}
