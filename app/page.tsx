"use client";

//@imports
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import showcaseImage from "../assets/images/iphone.png";
import appleLogo from "../assets/icons/apple_logo.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import ak_900_wired_keyboard from "../assets/images/ak_900_wired_keyboard.png";
import havit_hv_g92_gamepad from "../assets/images/havit_hv_g92_gamepad.png";
import ips_lcd_gaming_monitor from "../assets/images/ips_lcd_gaming_monitor.png";
import s_series_confort_chair from "../assets/images/s_series_comfort_chair.png";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoHeartOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";

type ItemType = {
  ID: number;
  name: string;
  amount: number;
  prevAmount: number;
  image: any;
  rating: number;
  perc_discount: number;
};

const sideNav = [
  { name: "Women's Fashion", path: "/fashion/women" },
  { name: "Men's Fashion", path: "/fashion/men" },
  { name: "Electronics", path: "/electronics" },
  { name: "Home & Lifestyle", path: "/lifestyle" },
  { name: "Medicine", path: "/medicine" },
  { name: "Sports & Outdoor", path: "/sports" },
  { name: "Baby's & Toy", path: "/toys" },
  { name: "Groceries & Pets", path: "/groceries" },
  { name: "Health & Beauty", path: "/health" },
];

const shoppingList = [
  {
    name: "HAVIT HV-G92 Gamepad",
    amount: 120,
    prevAmount: 160,
    rating: 5,
    image: havit_hv_g92_gamepad,
    ID: 1,
    perc_discount: 40,
  },
  {
    name: "AK-900 Wired Keyboard",
    amount: 960,
    prevAmount: 1160,
    rating: 4,
    image: ak_900_wired_keyboard,
    ID: 2,
    perc_discount: 35,
  },
  {
    name: "IPS LCD Gaming Monitor",
    amount: 370,
    prevAmount: 400,
    rating: 5.5,
    image: ips_lcd_gaming_monitor,
    ID: 3,
    perc_discount: 30,
  },
  {
    name: "S-Series Comfort Chair",
    amount: 375,
    prevAmount: 400,
    rating: 5.5,
    image: s_series_confort_chair,
    ID: 4,
    perc_discount: 25,
  },
];

export default function Home() {
  const [visible, setVisible] = useState<Boolean>(true);
  const isSeen = visible ? (
    <IoEyeOutline className="w-6 h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-6 h-6 text-gray-700" />
  );

  return (
    <div className="min-w-full space-y-24">
      {/* Showcase  */}
      <div className="container  md:space-x-4 flex justify-between items-stretch mx-auto mb-1">
        <div className="hidden basis-1/5 flex-col justify-starrt space-y-2 border-r border-slate-300 p-4 md:flex">
          <div className="flex self-center flex-col">
            {sideNav.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="text-sm block text-left text-slate-600 md:text-base lg:text-md rounded-lg p-1 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-900 p-4 w-full h-full flex items-center justify-evenly md:mt-4">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center justify-start">
                <Image
                  src={appleLogo}
                  alt="apple logo"
                  className="mr-2 w-6 h-6"
                />
                <span className="text-gray-400 font-sm">iphone 14 series</span>
              </div>
              <div>
                <h4 className="text-gray-200 font-md text-2xl md:text-4xl lg:text-6xl">
                  Up to 10%
                </h4>
                <h4 className="text-gray-200 font-md text-2xl md:text-4xl lg:text-6xl">
                  off Voucher
                </h4>
              </div>
              <Link
                href="/shop/now"
                className="flex items-center text-sm justify-start text-gray-300 font-medium underline"
              >
                Show Now
                <Image src={arrowRight} alt="arrow" className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <Image
              src={showcaseImage}
              className="w-44 h-36 md:w-60 md:h-44 lg:w-72 lg:h-52"
              alt="showcase"
            />
          </div>
        </div>
      </div>

      {/* Today Sale */}
      <div className="container flex flex-col justify-center space-y-6  mx-auto pb-8">
        <div className="ml-4">
          {/* Bullet  */}
          <div className="flex items-center space-x-2">
            <div className="h-7 w-3 bg-red-600 rounded-sm" />
            <h4 className="text-red-600 text-base font-medium md:text-lg">
              Today's
            </h4>
          </div>
        </div>

        {/* Heading  */}
        <div className="flex px-4 justify-between items-center space-x-6">
          <h2 className="text-gray-700 text-lg font-bold md:text-2xl lg:text-4xl">
            Flash Sales
          </h2>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-gray-700 font-medium text-xs md:text-md">
                Days
              </p>
              <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
                03
              </h2>
            </div>
            <span className="text-2xl text-red-700">:</span>

            <div className="flex flex-col space-y-2 items-center justify-center">
              <p className="text-gray-700 font-medium text-xs md:text-md">
                Hours
              </p>
              <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
                23
              </h2>
            </div>
            <span className="text-2xl text-red-700">:</span>

            <div className="flex flex-col space-y-2 items-center justify-center">
              <p className="text-gray-700 font-medium text-xs md:text-md">
                Minutes
              </p>
              <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
                19
              </h2>
            </div>
            <span className="text-2xl text-red-700">:</span>

            <div className="flex flex-col space-y-2 items-center justify-center">
              <p className="text-gray-700 font-medium text-xs md:text-md">
                Seconds
              </p>
              <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
                56
              </h2>
            </div>
          </div>

          <div className="flex basis-2/5 items-center justify-end">
            <button className="bg-gray-200 rounded-lg mr-2 p-1">
              <IoArrowBackOutline
                size={20}
                className="text-gray-500 w-3 h-3 md:w-5 md:h-5"
              />
            </button>
            <button className="bg-gray-200 rounded-lg p-1">
              <IoArrowForwardOutline className="text-gray-500 w-3 h-3 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* items */}
        <div
          className="flex space-x-6 items-center mb-6"
          style={{ overflowX: "scroll" }}
        >
          {shoppingList.map((item: ItemType) => (
            <div key={item.ID} className="flex flex-col space-y-4 ml-4">
              <button className="relative max-w-64 max-h-64 w-64 h-64 bg-gray-100 rounded-sm flex items-center justify-between">
                <button className="self-start mt-3 ml-3 rounded-md p-1 bg-red-600 text-xs text-gray-50 font-medium">
                  -{item.perc_discount}%
                </button>
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50%", height: 127 }}
                />
                <div className="self-start mt-3 mr-3 flex flex-col space-y-4">
                  <button className="bg-gray-100">
                    <IoHeartOutline className="w-6 h-6 text-gray-700" />
                  </button>
                  <button className="bg-gray-100">{isSeen}</button>
                </div>

                <button
                  className="absolute bottom-0 text-center text-gray-100 self-end p-2 bg-gray-800"
                  style={{ width: "100%" }}
                >
                  Add To Cart
                </button>
              </button>
              <div className="space-y-2 mb-4">
                <h4 className="text-gray-700 text-md font-medium">
                  {item.name}
                </h4>

                <h4 className="space-x-3 font-medium">
                  <span className="text-red-500">${item.amount}</span>
                  <span className="text-gray-400 line-through">
                    ${item.prevAmount}
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </div>
        <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
          View All Products
        </button>
      </div>
    </div>
  );
}
