import { ScreenTypes, PictureTypes, SortTypes } from 'src/app/interfaces';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host: 'https://localhost:8082',
  cloudinary: {
    cloudName: 'hd1oejweg',
    cloudHost: 'https://res.cloudinary.com',
    pictureSize: {
      [PictureTypes.ProductPicture]: {
        [ScreenTypes.xs]: {
          w: 590,
          h: 443
        },
        [ScreenTypes.sm]: {
          w: 460,
          h: 345
        },
        [ScreenTypes.md]: {
          w: 400,
          h: 300
        },
        [ScreenTypes.xl]: {
          w: 400,
          h: 300
        }
      },
      [PictureTypes.DashboardProductPicture]: {
        [ScreenTypes.xs]: {
          w: 590,
          h: 443
        },
        [ScreenTypes.sm]: {
          w: 460,
          h: 345
        },
        [ScreenTypes.md]: {
          w: 400,
          h: 300
        },
        [ScreenTypes.xl]: {
          w: 400,
          h: 300
        }
      },
      [PictureTypes.PopupProductPicture]: {
        [ScreenTypes.xs]: {
          w: 590,
          h: 443
        },
        [ScreenTypes.sm]: {
          w: 900,
          h: 675
        },
        [ScreenTypes.md]: {
          w: 1100,
          h: 825
        },
        [ScreenTypes.xl]: {
          w: 1100,
          h: 825
        }
      }
    }
  },
  defaults: {
    productPicture: 'default_product',
    userPicture: 'default_avatar',
    picturesOnPage: {
      [ScreenTypes.xs]: 6,
      [ScreenTypes.sm]: 6,
      [ScreenTypes.md]: 9,
      [ScreenTypes.xl]: 9
    }
  },
  permissions: {
    admin: ['casual', 'guest', 'user', 'manager', 'admin', 'google', 'facebook'],
    manager: ['casual', 'guest', 'user', 'manager', 'google', 'facebook'],
    user: ['casual', 'guest', 'user', 'google', 'facebook'],
    google: ['casual', 'guest', 'user', 'google'],
    facebook: ['casual', 'guest', 'user', 'facebook'],
    guest: ['casual', 'guest'],
    casual: ['casual']
  },
  sortQueries: {
    [SortTypes.CreatedAt]: { [SortTypes.CreatedAt] : -1},
    [SortTypes.Views]: { [SortTypes.Views]: -1, [SortTypes.CreatedAt]: -1 },
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
