import { PictureTypes, ScreenTypes, SortTypes } from 'src/app/interfaces';

export const environment = {
  production: true,
  host: '',
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
          w: 400,
          h: 300
        },
        xl: {
          w: 400,
          h: 300
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
          w: 400,
          h: 300
        },
        xl: {
          w: 400,
          h: 300
        }
      },
      PopupProductPicture: {
        xs: {
          w: 590,
          h: 443
        },
        sm: {
          w: 900,
          h: 675
        },
        md: {
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
      xl: 9
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
    CreatedAt: { CreatedAt: -1 },
    Views: { Views: -1, CreatedAt: -1 },
  }
};
