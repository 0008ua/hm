export interface IUser {
  _id: string;
  displayName: string;
  role: string;
  photoUrl?: string;
  provider?: string;
  loading?: boolean;
  error?: string;
  q?: string;
}

export class User implements IUser {
  constructor(
    public _id: string | null,
    public displayName: string,
    public role: 'guest',
    public photoURL?: string, // TODO add default
    public provider?: string, // TODO add default
    public loading?: boolean, // TODO add default
    public error?: string, // TODO add default
  ) { }
}

export interface IProduct {
  _id: string;
  parents: string[];
  picture: string;
  name?: string;
  views?: number;
  createdAt?: number;
  display: boolean;
}

export interface ICatalog {
  _id: string;
  name: string;
  ancestors: string[];
  parent: string;
  picture: string;
  auth: string;
  order: number;
  prefix: string;
  seoTitle: string;
  seoMeta: string;
}

export enum ScreenTypes {
  'xs' = 'xs',
  // 'gt-xs' = 'gt-xs',
  // 'lt-sm' = 'lt-sm',
  'sm' = 'sm',
  // 'gt-sm' = 'gt-sm',
  // 'lt-md' = 'lt-md',
  'md' = 'md',
  // 'gt-md' = 'gt-md',
  // 'lt-xl' = 'lt-xl',
  'xl' = 'xl',
  // 'gt-xl' = 'gt-xl'
}

export enum PictureTypes {
  ProductPicture,
  MainPicture
}

export enum ProductScreenTypes {
  'xs' = 'c_fill,w_590,h_443,f_auto/w_295,g_south_east,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-xs' = '',
  // 'lt-sm' = '',
  'sm' = 'c_fill,w_460,h_345,f_auto/w_230,g_south_east,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-sm' = '',
  // 'lt-md' = '',
  'md' = 'c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-md' = '',
  // 'lt-xl' = '',
  'xl' = 'c_fill,w_400,h_300,f_auto/w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-xl' = ''
}

export enum MainScreenTypes {
  'xs' = 'c_fill,w_590,h_443,f_auto/w_295,g_north_west,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-xs' = '',
  // 'lt-sm' = '',
  'sm' = 'c_fill,w_460,h_345,f_auto/w_230,g_north_west,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-sm' = '',
  // 'lt-md' = '',
  'md' = 'c_fill,w_400,h_300,f_auto/w_200,g_north_west,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-md' = '',
  // 'lt-xl' = '',
  'xl' = 'c_fill,w_400,h_300,f_auto/w_200,g_north_west,x_5,y_5,l_hmade_logo_light_watermark',
  // 'gt-xl' = ''
}
