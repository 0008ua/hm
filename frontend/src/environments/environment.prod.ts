export const environment = {
  production: true,
  host: 'https://hmade.work',
  recaptchaSiteKey: '6Le5XoUUAAAAACCWkV0muQG0SFc75G_7udZzbqs1',
  // host: 'https://localhost:8082',

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
          w: 900,
          h: 675
        },
        md: {
          w: 1100,
          h: 825
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
      xs: 2,
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
  seoTitle_en: 'HMADE Workshop of creativity HandMADE',
  seoMeta_en: 'Interesting ideas of creativity. Sweet bouquets, bouquets of sweets and chocolate, bouquets of flowers, compositions of vegetables and fruit. Design, decor, decorations. Handmade toys and kids clothes, knitting',
  seoTitle: 'HMADE Майстерня творчості HandMADE',
  seoMeta: 'Цікаві ідеї для творчості. Солодкі букети з цекерок, букети з квітів, композиції з овочів та фруктів. Дизайн, декор, оформлення. Іграшки та дитячий одяг ручної роботи, в\'язання.',
};
