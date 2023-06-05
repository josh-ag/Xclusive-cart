// @types

// @Type
export type ProductType = {
  ID: string;
  name: string;
  amount: number;
  prevAmount?: number;
  image: any;
  rating: number;
  path: string;
};

export type TrendingProductsType = {
  ID: string;
  name: string;
  amount: number;
  prevAmount?: number;
  image: any;
  rating: number;
  path: string;
  isNew?: Boolean;
  colors?: any;
};

export type ItemType = {
  ID: string;
  name: string;
  amount: number;
  prevAmount: number;
  image: any;
  rating: number;
  perc_discount: number;
  path: string;
};

export type CategoryType = {
  type: string;
  logo: string;
  id: number;
  path: string;
};

export type UserType = {
  ID?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
};

export interface AppContextInterface {
  authenticated: any;
  products: [];
  shopList: [];
  bestSelling: [];
  wishList?: [];
  cart: number;
  setCart: (arg: number) => number;
  setUser: (arg: UserType) => any;
  setAuthenticated: (arg: boolean) => any;
}
