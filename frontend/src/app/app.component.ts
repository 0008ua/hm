import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser, PictureTypes } from './interfaces';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { GetUser } from './actions/user.actions';
import { FbService } from './services/fb.service';
import { LoadScreens } from './actions/screen.actions';
import { ScreenState } from './reducers/screen.reducer';
import { Router } from '@angular/router';

declare let FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: IUser;
  link: any;
  constructor(
    private userService: UserService,
    private store: Store<State>,
    private router: Router,
    // private fbService: FbService
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUser());
    this.store.select('auth')
      .subscribe(store => this.user = store.user);

    this.store.dispatch(new LoadScreens());
  }

  allowTo(permittedRole: string) {
    return this.userService.allowTo(permittedRole);
  }

  restrictTo(restrictedRoles: string[]) {
    return this.userService.restrictTo(restrictedRoles);
  }

  logout() {
    this.userService.logout().subscribe(_ => this.router.navigate(['/']));
  }

}
