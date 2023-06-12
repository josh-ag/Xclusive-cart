"use client";

import React, { createContext, useState } from "react";
import {
  DummyUsers,
  Products,
  Shoplist,
  Cart,
  Bestselling,
  Wishlist,
} from "@/data/dummyData";

import {
  AppContextInterface,
  ItemType,
  ProductType,
  TrendingProductsType,
  UserType,
} from "@/type.d";

export const AppContext = createContext<AppContextInterface>({
  authenticated: Boolean,
  products: [],
  shopList: [],
  bestSelling: [],
  wishList: [],
  cart: [],
  setUser: (arg: UserType) => arg,
  setCart: (arg: number) => arg,
  setAuthenticated: (arg: boolean) => arg,
});

export const AppContextProvider = (props: any) => {
  /*===========================================
             APP  GLOBAL  STATE
    ===========================================*/
  const [cart, setCart] = useState<ProductType[]>([...Cart]);
  const [bestSelling, setBestSelling] = useState<ProductType[]>([
    ...Bestselling,
  ]);

  const [shopList, setShoplist] = useState<ItemType[]>([...Shoplist]);

  const [products, setProducts] = useState<TrendingProductsType[]>([
    ...Products,
  ]);

  const [wishList, setWishList] = useState<ProductType[]>([...Wishlist]);

  const [authenticated, setAuthenticated] = useState<Boolean>(true);
  const [user, setUser] = useState<UserType>({ email: "", password: "" });

  //Handle login
  const handleLogin = (login: UserType) => {
    const loginUser = DummyUsers.filter((user) => user.ID === login.ID);
  };

  return (
    <AppContext.Provider
      value={{
        authenticated,
        products,
        shopList,
        bestSelling,
        setAuthenticated,
        setUser,
        cart,
        setCart,
        wishList,
      }}
      {...props}
    />
  );
};
