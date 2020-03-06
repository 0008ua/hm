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
  parent: string;
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
export interface ISortOrder {
  createdAt?: number;
  views?: number;
}

export interface ISortQuery {
  [key: string]: {
    [key: string]: number
  } | null;
}

export enum SortTypes {
  CreatedAt = 'CreatedAt',
  Views = 'Views',
}


export interface IPictureSize {
  [key: string]: {
    w: number,
    h: number
  };
}

export interface IPictureState {
  size: {
    w: number,
    h: number
  };
  link: string;
}

export enum ScreenTypes {
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

export enum PictureTypes {
  ProductPicture = 'ProductPicture',
  DashboardProductPicture = 'DashboardProductPicture',
  ModalProductPicture = 'ModalProductPicture'
}
