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
  views: number;
  createdAt: number;
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
