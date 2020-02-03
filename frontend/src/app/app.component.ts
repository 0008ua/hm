import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './interfaces';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { GetUser } from './actions/user.actions';
import { FbService } from './services/fb.service';
declare let FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: IUser;
  constructor(
    private userService: UserService,
    private store: Store<State>,
    // private fbService: FbService
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUser());
    this.store.select('auth')
      .subscribe(store => this.user = store.user);
  }

  // api() {
  //   this.fbService.FB.api('/me',

  //     {fields: 'id,name,birthday,email' },
  //     function (response) {
  //       console.log('api', response);
  //     }
  //   );
  // }


  // statusFB() {
  //   this.fbService.FB.getLoginStatus((response) => {
  //     console.log('response', response);
  //     if (response.status === 'connected') {
  //       console.log('connected');
  //       // The user is logged in and has authenticated your
  //       // app, and response.authResponse supplies
  //       // the user's ID, a valid access token, a signed
  //       // request, and the time the access token 
  //       // and signed request each expire.
  //       var uid = response.authResponse.userID;
  //       var accessToken = response.authResponse.accessToken;
  //     } else if (response.status === 'not_authorized') {
  //       console.log('not_authorized');

  //       // The user hasn't authorized your application.  They
  //       // must click the Login button, or you must call FB.login
  //       // in response to a user gesture, to launch a login dialog.
  //     } else {
  //       console.log('else');

  //       // The user isn't logged in to Facebook. You can launch a
  //       // login dialog with a user gesture, but the user may have
  //       // to log in to Facebook before authorizing your application.
  //     }
  //   });
  // }

  // logoutFB() {
  //   this.fbService.logout();
  // }
  // loginFB() {
  //   this.fbService.login();
  // }

  logout() {
    this.userService.logout().subscribe(logout => console.log(logout));
  }

}
