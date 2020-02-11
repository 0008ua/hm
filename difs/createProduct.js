db.getCollection('products')
  .drop();
db.getCollection('products')
  .insertMany([
    {
      name: 'Віночок',
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0003_1547651124513',
      parents: ['toys'],
    },
    {
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0002_1546520032273',
      parents: ['toys'],
    },
    {
      name: 'Віночок',
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0001_1546518611126',
      parents: ['toys'],
    },
    {
      name: 'Віночок',
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0013_1551278734776',
      parents: ['toys'],
    },
    {
      name: 'Віночок',
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0010_1551113875498',
      parents: ['toys'],
    },
    {
      name: 'Віночок',
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0014_1551279496552',
      parents: ['toys'],
    },
    {
      name: 'Віночок',
      picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0011_1551114577517',
      parents: ['toys'],
    }
  ]);