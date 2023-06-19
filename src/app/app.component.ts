import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-door';

  constructor (private cookieService: CookieService, private router: Router) {
    const examResult = this.cookieService.get("exam")
    if (!examResult) {
      this.router.navigate(["/"]);
    }
  }
}
