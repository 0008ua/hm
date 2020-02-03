import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        name: 'Віночок',
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0003_1547651124513',
        description: 'lorem ipsum'
      },
      {
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0002_1546520032273',
        description: ''
      },
      {
        name: 'Віночок',
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_wrh0001_1546518611126',
        description: ''
      },
      {
        name: 'Віночок',
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0013_1551278734776',
        description: ''
      },
      {
        name: 'Віночок',
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0010_1551113875498',
        description: ''
      },
      {
        name: 'Віночок',
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0014_1551279496552',
        description: ''
      },
      {
        name: 'Віночок',
        picture: 'https://res.cloudinary.com/hd1oejweg/c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/menu_image_bus0011_1551114577517',
        description: ''
      }
    ]
  }

}
