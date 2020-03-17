db.getCollection('catalogs')
    .drop();
db.getCollection('catalogs')
    .insertMany([
      {
        _id: 'home', name_en: 'Main', name_uk: 'Головна', ancestors: [], parent: 'null',
        auth: 'casual', order: 0, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'common', name_en: 'Common', name_uk: 'Загальні', ancestors: ['home'], parent: 'home',
        auth: 'casual', order: 1, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },

      {
        _id: 'about', name_en: 'About', name_uk: 'Про себе', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 1, picture: '', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },

      {
        _id: 'products', name_en: 'Products', name_uk: 'Роботи', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 2, picture: '', description: '', 
        prefix: '', seoTitle: 'HandMADE - мої роботи', seoMeta: 'Ручна робота',
      },

      {
        _id: 'toys', ancestors: ['home', 'common', 'products'], parent: 'products', order: 1,
        picture: 'category-toys', prefix: 'toy',
        name_en: 'Toys', name_uk: 'Іграшки', description: '',
        seoTitle: 'HandMADE - Іграшки', seoMeta: 'Іграшки ручної роботи, тильди, м\'які іграшки, подарунки для дітей',
      },
      {
        _id: 'kids', ancestors: ['home', 'common', 'products'], parent: 'products', order: 6,
        picture: '', prefix: 'kid',
        name_en: 'For kids', name_uk: 'Для немовлят', description: '',
        seoTitle: 'HandMADE - Для немовлят', seoMeta: 'В\'язання, одяг, шапочка, пінетки, погрумушка, рукавички, іграшки для немовлят',
      },
      {
        _id: 'wreaths', ancestors: ['home', 'common', 'products'], parent: 'products', order: 2,
        picture: 'category-wreaths', prefix: 'wrh',
        name_en: 'Head wreaths', name_uk: 'Віночки', description: '',
        seoTitle: 'HandMADE - Віночки', seoMeta: 'Віночки ручної роботи, прикраси',
      },
      {
        _id: 'bouquets', ancestors: ['home', 'common', 'products'], parent: 'products', order: 3,
        picture: 'category-bouquets', prefix: 'buq',
        name_en: 'Bouquets', name_uk: 'Букети', description: '',
        seoTitle: 'HandMADE - Букети ручної роботи', seoMeta: 'Букети, композиції',
      },
      {
        _id: 'fruitBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 1,
        picture: 'category-fruitBouquets', prefix: 'buf',
        name_en: 'Fruit bouquets', name_uk: 'Букети з фруктів та овочів', description: '',
        seoTitle: 'HandMADE - Букети з фруктів та овочів', seoMeta: 'Букети з фруктів, овочів, ковбаси, снеків, для чоловіків, для жінок, вегетаріанські, їстивні, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'sweetBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 2,
        picture: 'category-sweetBouquets', prefix: 'bus',
        name_en: 'Sweet bouquets', name_uk: 'Букети з цукерок', description: '',
        seoTitle: 'HandMADE - Букети з цукерок', seoMeta: 'Букети та композиції з цукерок, солодкі букети, цукеркові, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'flowerBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 3,
        picture: 'category-flowerBouquets', prefix: 'bfl',
        name_en: 'Flower bouquets', name_uk: 'Букети з квітів', description: '',
        seoTitle: 'HandMADE - Букети з квітів', seoMeta: 'Букети та композиції з квітів, з живих квітів, з рослин, весільні, на ювілей, подарунок',
      },
      {
        _id: 'otherBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 4,
        picture: 'category-otherBouquets', prefix: 'buo',
        name_en: 'Other bouquets', name_uk: 'Інші букети', description: '',
        seoTitle: 'HandMADE - Екзотичні букети', seoMeta: 'Екзотичні букети та композиції на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'decorative', ancestors: ['home', 'common', 'products'], parent: 'products', order: 4,
        picture: 'category-decorative', prefix: 'dcr',
        name_en: 'Decorations', name_uk: 'Декор', description: '',
        seoTitle: 'HandMADE - Декор', seoMeta: 'Декорації, прикраси, оформлення залів, весіль, декорування подарунків',
      },
      {
        _id: 'easterDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 1,
        picture: 'category-easterDecor', prefix: 'dce', name_en: 'Easter Decorations', name_uk: 'Великодній декор', description: '',
        seoTitle: 'HandMADE - Великодній декор', seoMeta: 'Великодні кошики, писанки, прикраси',
      },
      {
        _id: 'weddingDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 2,
        picture: 'category-weddingDecor', prefix: 'dcw', name_en: 'Wedding Decorations', name_uk: 'Весільний декор', description: '',
        seoTitle: 'HandMADE - Весільний декор', seoMeta: 'Весільні атрибути, прикрашання, оформлення залів, подушечка для обручок, коробка для грошей, келихи, піньята, кошичок для цукерок',
      },
      {
        _id: 'fotoZones', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 3,
        picture: 'category-fotoZones', prefix: 'dcf', name_en: 'Photozones', name_uk: 'Фотозони', description: '',
        seoTitle: 'HandMADE - Фотозони', seoMeta: 'Оформлення фотозон, тематичні декорації, виставки, презентації, roadshow, покази',
      },
      {
        _id: 'presents', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 4,
        picture: 'category-presents', prefix: 'dcp', name_en: 'Presents', name_uk: 'Оформлення подарунків', description: '',
        seoTitle: 'HandMADE - Оформлення подарунків', seoMeta: 'Оформлення, пакування подарунків',
      },

      // { _id: 'knitting', ancestors: ['home', 'common', 'products'], parent: 'products', order: 5,
      //   picture: 'knitting', prefix: 'kni',
      //   name_en: '', name_uk: 'В\'язання', description: ''},
      //   { _id: 'mittens', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 1,
      //     picture: 'mittens', prefix: 'knm',
      //     name_en: '', name_uk: 'В\'язані рукавички', description: ''},
      //   { _id: 'hats', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 2,
      //     picture: 'hats', prefix: 'knh',
      //     name_en: '', name_uk: 'В\'язані шапки', description: ''},
      //   { _id: 'pads', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 3,
      //     picture: 'pads', prefix: 'knp',
      //     name_en: '', name_uk: 'Дитячі пінєтки', description: ''},
      //   { _id: 'knitedFlowers', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 4,
      //   picture: 'knitedFlowers', prefix: 'knf',
      //   name_en: '', name_uk: 'Квіти', description: ''},


      {
        _id: 'scrapbooking', ancestors: ['home', 'common', 'products'], parent: 'products', order: 6,
        picture: 'category-scrapbooking', prefix: 'scr',
        name_en: 'Scrapbooking', name_uk: 'Скрапбукінг', description: '',
        seoTitle: 'HandMADE - Скрапбукінг', seoMeta: 'Скрапбукінг',
      },
      {
        _id: 'albums', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 1,
        picture: 'category-albums', prefix: 'sca', name_en: 'Albums', name_uk: 'Альбоми', description: '',
        seoTitle: 'HandMADE - Альбоми', seoMeta: 'Ручна робота, фотоальбоми, весільні, шкільні альбоми, обкладинки, аьбоми для дитячих садків, для немовлят, для ювілеїв',
      },
      {
        _id: 'cards', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 2,
        picture: 'category-cards', prefix: 'scc', name_en: 'Cards', name_uk: 'Листівки', description: '',
        seoTitle: 'HandMADE - Листівки', seoMeta: 'Ручна робота, весільні, листівки для немовлят, для ювілеїв',
      },
      {
        _id: 'mcs', name_en: 'Masterclasses', name_uk: 'Майстер-класи', ancestors: ['home', 'common'], parent: 'common', prefix: 'mcs',
        auth: 'casual', order: 3, prefix: 'to', picture: '', description: '',
        seoTitle: 'HandMADE - Майстер-класи', seoMeta: 'Ручна робота, майстер-класи, покроковий опис, як зробити, зробити своїми руками, зробити самому',
      },
      {
        _id: 'literature', name_en: 'Poems', name_uk: 'Вірші', ancestors: ['home', 'common'], parent: 'common', prefix: 'lit',
        auth: 'casual', order: 4, prefix: 'li', picture: '', description: '',
        seoTitle: 'HandMADE - Літературна сторінка', seoMeta: 'Вірші',
      },
      // { _id: 'contacts', name_en: '', name_uk: 'Контакти', ancestors: ['home', 'common'], parent: 'common',
      //   auth: 'casual', order: 4, picture: '',description: ''},
      {
        _id: 'system', name_en: 'System', name_uk: 'Система', ancestors: ['home'], parent: 'home',
        auth: 'guest', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },

      {
        _id: 'dashboard', name_en: 'Dashboard', name_uk: 'Dashboard', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 1, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      // {_id: 'profile', name_en: '', name_uk: 'Профіль', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'guest', order: 1, picture: 'catalog'],description: ''},
      {
        _id: 'product-form', name_en: 'Product form', name_uk: 'Редактор виробів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      // {
      //   _id: 'product-category', name_en: '', name_uk: 'Вибір категорії виробів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'manager', order: 2, picture: 'catalog', description: '',
      //   prefix: '', seoTitle: '', seoMeta: '',
      // },
      {
        _id: 'login', name_en: 'Sign in', name_uk: 'Увійти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'signup', name_en: 'Sign up', name_uk: 'Реєстрація', ancestors: ['home', 'system'], parent: 'system',
        auth: 'manager', order: 3, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'logout', name_en: 'Logout', name_uk: 'Вийти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 4, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
    ]);
