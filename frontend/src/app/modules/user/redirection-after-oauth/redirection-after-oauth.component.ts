import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-redirection-after-oauth',
  templateUrl: './redirection-after-oauth.component.html',
  styleUrls: ['./redirection-after-oauth.component.scss'],
})
export class RedirectionAfterOauthComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1),
        switchMap((event_) => this.userService.userCheckAuthorization('manager')),
    )
        .subscribe((auth) => {
          if (auth) {
            this.router.navigate(['/dashboard', 'product-form']);
          } else {
            this.router.navigate(['/user', 'profile']);
          }
        },
        (err) => console.log('err', err),
        );
  }
  ngOnInit() { }
}
