"use client";

import React, { createContext, useState } from "react";

import ak_900_wired_keyboard from "../../assets/images/ak_900_wired_keyboard.png";
import havit_hv_g92_gamepad from "../../assets/images/havit_hv_g92_gamepad.png";
import ips_lcd_gaming_monitor from "../../assets/images/ips_lcd_gaming_monitor.png";
import s_series_confort_chair from "../../assets/images/s_series_comfort_chair.png";
import north_coat from "../../assets/images/north_coat.png";
import gucci_bag from "../../assets/images/gucci_bag.png";
import rgb_cooler from "../../assets/images/rgb_cooler.png";
import book_shelf from "../../assets/images/small_shelf.png";
import asus_gaming_pc from "../../assets/images/asus_gaming_pc.png";
import canon_dslr_camera from "../../assets/images/canon_dslr_camera.png";
import curology_product_set from "../../assets/images/curology.png";
import dog_food from "../../assets/images/dog_food.png";
import gp11_prd3 from "../../assets/images/GP11_PRD3 1.png";
import kid_electric_car from "../../assets/images/kid_electric_car.png";
import jr_zoom_soccer_cleats from "../../assets/images/jr_zoom_soccer_cleats.png";
import quilted_satin_jacket from "../../assets/images/quilted_satin_jacket.png";
import { DummyUsers } from "@/data/dummyData";

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
  setUser: (arg: UserType) => arg,
  setCart: (arg: number) => arg,
  setAuthenticated: (arg: boolean) => arg,
});

export const AppContextProvider = (props: any) => {
  /*===========================================
            STATE
    ===========================================*/
  const [cart, setCart] = useState<number>(0);
  const [bestSelling, setBestSelling] = useState<ProductType[]>([
    {
      name: "The North Coat",
      amount: 260,
      prevAmount: 360,
      rating: 65,
      image: north_coat,
      ID: "P_0001",
      path: "/the_north_coat",
    },
    {
      name: "Gucci Duffle Bag",
      amount: 260,
      prevAmount: 360,
      rating: 65,
      image: gucci_bag,
      ID: "P_0002",
      path: "/gucci_duffle_bag",
    },
    {
      name: "RGB Liquid Cooler",
      amount: 160,
      prevAmount: 170,
      rating: 65,
      image: rgb_cooler,
      ID: "P_0003",
      path: "/rgb_liquid_cooler",
    },
    {
      name: "Small Bookshelf",
      amount: 360,
      prevAmount: 360,
      rating: 65,
      image: book_shelf,
      ID: "P_0004",
      path: "/small_shelf",
    },
  ]);

  const [shopList, setShoplist] = useState<ItemType[]>([
    {
      name: "HAVIT HV-G92 Gamepad",
      amount: 120,
      prevAmount: 160,
      rating: 5,
      image: havit_hv_g92_gamepad,
      ID: "1",
      perc_discount: 40,
      path: "/havit_hv_g92_gamepad",
    },
    {
      name: "AK-900 Wired Keyboard",
      amount: 960,
      prevAmount: 1160,
      rating: 4,
      image: ak_900_wired_keyboard,
      ID: "2",
      perc_discount: 35,
      path: "ak_900_wired_keyboard",
    },
    {
      name: "IPS LCD Gaming Monitor",
      amount: 370,
      prevAmount: 400,
      rating: 5.5,
      image: ips_lcd_gaming_monitor,
      ID: "3",
      perc_discount: 30,
      path: "ips_lcd_gaming_monitor",
    },
    {
      name: "S-Series Comfort Chair",
      amount: 375,
      prevAmount: 400,
      rating: 5.5,
      image: s_series_confort_chair,
      ID: "4",
      perc_discount: 25,
      path: "s_series_comfort_chair",
    },
  ]);

  const [products, setProducts] = useState<TrendingProductsType[]>([
    {
      name: "Breed Dry Dog Food",
      amount: 100,
      image: dog_food,
      rating: 35,
      ID: "T_0001",
      path: "/",
    },

    {
      name: "Canon EOS Dslr Camera",
      amount: 360,
      image: canon_dslr_camera,
      rating: 95,
      ID: "T_0002",
      path: "/",
    },

    {
      name: "Asus FHD Gaming Laptop",
      amount: 700,
      image: asus_gaming_pc,
      rating: 325,
      ID: "T_0003",
      path: "/",
    },
    {
      name: "Curology Product Set",
      amount: 500,
      image: curology_product_set,
      rating: 145,
      ID: "T_0004",
      path: "/",
    },
    {
      name: "Kids Electric Car",
      amount: 960,
      image: kid_electric_car,
      rating: 65,
      ID: "T_0005",
      isNew: true,
      path: "/",
      colors: ["red"],
    },

    {
      name: "Jr. Zoom Soccer Cleats",
      amount: 1160,
      image: jr_zoom_soccer_cleats,
      rating: 35,
      ID: "T_0006",
      path: "/",
      colors: ["yellow", "red"],
    },

    {
      name: "GP11 Shooter USB Gamepad",
      amount: 660,
      image: gp11_prd3,
      rating: 95,
      ID: "T_0007",
      isNew: true,
      path: "/",
      colors: ["black", "red"],
    },

    {
      name: "Quilted Satin Jacket",
      amount: 660,
      image: quilted_satin_jacket,
      rating: 55,
      ID: "T_0008",
      path: "/",
      colors: ["black", "red"],
    },
  ]);

  const [authenticated, setAuthenticated] = useState<Boolean>(false);
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
      }}
      {...props}
    />
  );
};
