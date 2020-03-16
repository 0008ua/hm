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
      ProductPicture: {
        xs: {
          w: 590,
          h: 443
        },
        sm: {
          w: 460,
          h: 345
        },
        md: {
          w: 300,
          h: 225
        },
        lg: {
          w: 360,
          h: 270
        },
        xl: {
          w: 360,
          h: 270
        }
      },
      DashboardProductPicture: {
        xs: {
          w: 590,
          h: 443
        },
        sm: {
          w: 460,
          h: 345
        },
        md: {
          w: 300,
          h: 225
        },
        lg: {
          w: 360,
          h: 270
        },
        xl: {
          w: 360,
          h: 270
        }
      },
      ModalProductPicture: {
        xs: {
          w: 590,
          h: 443
        },
        sm: {
          w: 760,
          h: 570
        },
        md: {
          w: 760,
          h: 570
        },
        lg: {
          w: 1100,
          h: 825
        },
        xl: {
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
      xs: 6,
      sm: 6,
      md: 9,
      lg: 12,
      xl: 15
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
    CreatedAt: { createdAt: -1 },
    Views: { views: -1, createdAt: -1 },
  },
  seoTitle: 'HMADE - Майстерня творчості HandMADE. Ручна робота. Букети, іграшки, декор, оформлення',
  seoMeta: 'Цікаві ідеї для творчості. Солодкі букети з цекерок, букети з квітів, композиції з овочів та фруктів. Дизайн, декор, оформлення. Іграшки ручної роботи, в\'язання.',
  
  section:
    {
      name: 'contactTitle',
      en: 'Contacts',
      icon: 'fas fa-home fa-2x',
    },
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
