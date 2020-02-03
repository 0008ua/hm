import { Injectable } from '@angular/core';
declare let FB: any;

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor() {
    console.log('fb service constructor');
    
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: '476248796327915',
        cookie: true,
        xfbml: true,
        version: 'v5.0',
        status: true // get status immidiatly after init
      });


      FB.Event.subscribe('auth.authResponseChange', (response) => {
        console.log('event fb - auth.authResponseChange', response);
      });

      FB.Event.subscribe('auth.statusChange', (response) => {
        console.log('event fb - auth.statusChange', response);
      });

      FB.Event.subscribe('auth.login', (response) => {
        console.log('event fb - auth.login', response);
      });

      FB.Event.subscribe('auth.logout', (response) => {
        console.log('event fb - auth.logout', response);
      });

      FB.Event.subscribe('xfbml.render', (response) => {
        console.log('event fb - xfbml.render', response);
      });

      FB.AppEvents.logPageView();
    };

    ((d, s, id) => {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');


  }

  get FB() {
    return FB;
  }

  logout() {
    FB.logout();
  }

  login() {
    FB.login(function (response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }
}

