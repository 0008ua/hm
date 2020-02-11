db.getCollection('catalogs')
    .drop();
db.getCollection('catalogs')
    .insertMany([
      {
        _id: 'home', name: 'Головна', ancestors: [], parent: 'null',
        auth: 'casual', order: 0, picture: 'catalog', description: '',
        prefix: '',seoTitle: '', seoMeta: '',
      },
      {
        _id: 'common', name: 'Загальні', ancestors: ['home'], parent: 'home',
        auth: 'casual', order: 1, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },

      {
        _id: 'about', name: 'Про себе', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 1, picture: '', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },

      {
        _id: 'products', name: 'Роботи', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 2, picture: '', description: '', 
        prefix: '', seoTitle: 'HandMADE - мої роботи', seoMeta: 'Ручна робота',
      },

      {
        _id: 'toys', ancestors: ['home', 'common', 'products'], parent: 'products', order: 1,
        picture: 'category-toys', prefix: 'toy',
        name: 'Іграшки', description: '',
        seoTitle: 'HandMADE - Іграшки', seoMeta: 'Іграшки ручної роботи, тильди, м\'які іграшки, подарунки для дітей',
      },
      {
        _id: 'wreaths', ancestors: ['home', 'common', 'products'], parent: 'products', order: 2,
        picture: 'category-wreaths', prefix: 'wrh',
        name: 'Віночки', description: '',
        seoTitle: 'HandMADE - Віночки', seoMeta: 'Віночки ручної роботи, прикраси',
      },
      {
        _id: 'bouquets', ancestors: ['home', 'common', 'products'], parent: 'products', order: 3,
        picture: 'category-bouquets', prefix: 'buq',
        name: 'Букети', description: '',
        seoTitle: 'HandMADE - Букети ручної роботи', seoMeta: 'Букети, композиції',
      },
      {
        _id: 'fruitBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 1,
        picture: 'category-fruitBouquets', prefix: 'buf',
        name: 'Букети з фруктів та овочів', description: '',
        seoTitle: 'HandMADE - Букети з фруктів та овочів', seoMeta: 'Букети з фруктів, овочів, ковбаси, снеків, для чоловіків, для жінок, вегетаріанські, їстивні, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'sweetBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 2,
        picture: 'category-sweetBouquets', prefix: 'bus',
        name: 'Букети з цукерок', description: '',
        seoTitle: 'HandMADE - Букети з цукерок', seoMeta: 'Букети та композиції з цукерок, солодкі букети, цукеркові, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'flowerBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 3,
        picture: 'category-flowerBouquets', prefix: 'bfl',
        name: 'Букети з квітів', description: '',
        seoTitle: 'HandMADE - Букети з квітів', seoMeta: 'Букети та композиції з квітів, з живих квітів, з рослин, весільні, на ювілей, подарунок',
      },
      {
        _id: 'otherBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 4,
        picture: 'category-otherBouquets', prefix: 'buo',
        name: 'Інші букети', description: '',
        seoTitle: 'HandMADE - Екзотичні букети', seoMeta: 'Екзотичні букети та композиції на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'decorative', ancestors: ['home', 'common', 'products'], parent: 'products', order: 4,
        picture: 'category-decorative', prefix: 'dcr',
        name: 'Декор', description: '',
        seoTitle: 'HandMADE - Декор', seoMeta: 'Декорації, прикраси, оформлення залів, весіль, декорування подарунків',
      },
      {
        _id: 'easterDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 1,
        picture: 'category-easterDecor', prefix: 'dce', name: 'Великодній декор', description: '',
        seoTitle: 'HandMADE - Великодній декор', seoMeta: 'Великодні кошики, писанки, прикраси',
      },
      {
        _id: 'weddingDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 2,
        picture: 'category-weddingDecor', prefix: 'dcw', name: 'Весільний декор', description: '',
        seoTitle: 'HandMADE - Весільний декор', seoMeta: 'Весільні атрибути, прикрашання, оформлення залів, подушечка для обручок, коробка для грошей, келихи, піньята, кошичок для цукерок',
      },
      {
        _id: 'fotoZones', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 3,
        picture: 'category-fotoZones', prefix: 'dcf', name: 'Фотозони', description: '',
        seoTitle: 'HandMADE - Фотозони', seoMeta: 'Оформлення фотозон, тематичні декорації, виставки, презентації, roadshow, покази',
      },
      {
        _id: 'presents', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 4,
        picture: 'category-presents', prefix: 'dcp', name: 'Оформлення подарунків', description: '',
        seoTitle: 'HandMADE - Оформлення подарунків', seoMeta: 'Оформлення, пакування подарунків',
      },

      // { _id: 'knitting', ancestors: ['home', 'common', 'products'], parent: 'products', order: 5,
      //   picture: 'knitting', prefix: 'kni',
      //   name: 'В\'язання', description: ''},
      //   { _id: 'mittens', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 1,
      //     picture: 'mittens', prefix: 'knm',
      //     name: 'В\'язані рукавички', description: ''},
      //   { _id: 'hats', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 2,
      //     picture: 'hats', prefix: 'knh',
      //     name: 'В\'язані шапки', description: ''},
      //   { _id: 'pads', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 3,
      //     picture: 'pads', prefix: 'knp',
      //     name: 'Дитячі пінєтки', description: ''},
      //   { _id: 'knitedFlowers', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 4,
      //   picture: 'knitedFlowers', prefix: 'knf',
      //   name: 'Квіти', description: ''},


      {
        _id: 'scrapbooking', ancestors: ['home', 'common', 'products'], parent: 'products', order: 6,
        picture: 'category-scrapbooking', prefix: 'scr',
        name: 'Скрапбукінг', description: '',
        seoTitle: 'HandMADE - Скрапбукінг', seoMeta: 'Скрапбукінг',
      },
      {
        _id: 'albums', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 1,
        picture: 'category-albums', prefix: 'sca', name: 'Альбоми', description: '',
        seoTitle: 'HandMADE - Альбоми', seoMeta: 'Ручна робота, фотоальбоми, весільні, шкільні альбоми, обкладинки, аьбоми для дитячих садків, для немовлят, для ювілеїв',
      },
      {
        _id: 'cards', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 2,
        picture: 'category-cards', prefix: 'scc', name: 'Листівки', description: '',
        seoTitle: 'HandMADE - Листівки', seoMeta: 'Ручна робота, весільні, листівки для немовлят, для ювілеїв',
      },
      {
        _id: 'mcs', name: 'Майстер-класи', ancestors: ['home', 'common'], parent: 'common', prefix: 'mcs',
        auth: 'casual', order: 3, prefix: 'to', picture: '', description: '',
        seoTitle: 'HandMADE - Майстер-класи', seoMeta: 'Ручна робота, майстер-класи, покроковий опис, як зробити, зробити своїми руками, зробити самому',
      },
      {
        _id: 'literature', name: 'Вірші', ancestors: ['home', 'common'], parent: 'common', prefix: 'lit',
        auth: 'casual', order: 4, prefix: 'li', picture: '', description: '',
        seoTitle: 'HandMADE - Літературна сторінка', seoMeta: 'Вірші',
      },
      // { _id: 'contacts', name: 'Контакти', ancestors: ['home', 'common'], parent: 'common',
      //   auth: 'casual', order: 4, picture: '',description: ''},
      {
        _id: 'system', name: 'Система', ancestors: ['home'], parent: 'home',
        auth: 'guest', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },

      {
        _id: 'dashboard', name: 'Dashboard', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 1, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      // {_id: 'profile', name: 'Профіль', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'guest', order: 1, picture: 'catalog'],description: ''},
      {
        _id: 'product-editor', name: 'Редактор виробів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'tools', name: 'Інструменти', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 5, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'login', name: 'Увійти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'signup', name: 'Реєстрація', ancestors: ['home', 'system'], parent: 'system',
        auth: 'manager', order: 3, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
      {
        _id: 'logout', name: 'Вийти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 4, picture: 'catalog', description: '',
        prefix: '', seoTitle: '', seoMeta: '',
      },
    ]);
