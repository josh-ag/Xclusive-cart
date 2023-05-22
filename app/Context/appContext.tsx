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

export const AppContext = createContext(React.Children);

export const AppContextProvider = (props: any) => {
  /*===========================================
            STATE
    ===========================================*/

  const [products, setProducts] = useState([
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

  const [shopList, setShoplist] = useState([
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

  const [authenticated, setAuthenticated] = useState({
    isLogin: false,
    username: null,
  });

  return (
    <AppContext.Provider
      value={{ authenticated, products, shopList }}
      {...props}
    />
  );
};
