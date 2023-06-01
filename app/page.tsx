"use client";

//@imports
import { useState, useContext, useEffect } from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import showcaseImage from "../assets/images/iphone.png";
import appleLogo from "../assets/icons/apple_logo.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import category_cellphone from "../assets/icons/Category-CellPhone.svg";
import category_computer from "../assets/icons/Category-Computer.svg";
import category_camera from "../assets/icons/Category-Camera.svg";
import category_gamepad from "../assets/icons/Category-Gamepad.svg";
import category_smartwatch from "../assets/icons/Category-SmartWatch.svg";
import jbl_boombox from "../assets/images/jbl_boombox.png";
import icon_delivery from "../assets/icons/icon-delivery.svg";
import icon_customer_service from "../assets/icons/Icon-Customer_service.svg";
import icon_secure from "../assets/icons/Icon-secure.svg";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoHeartOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import {
  ItemType,
  ProductType,
  CategoryType,
  TrendingProductsType,
} from "@/type.d";
import { AppContext } from "./Context/appContext";
import arrow_up from "../assets/icons/arrow-up.svg";

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

const Categories = [
  { type: "Phones", logo: category_cellphone, id: 1, path: "/phones" },
  { type: "Computers", logo: category_computer, id: 2, path: "/computers" },
  {
    type: "SmartWatch",
    logo: category_smartwatch,
    id: 3,
    path: "/smartwatches",
  },
  { type: "Camera", logo: category_camera, id: 4, path: "/cameras" },
  { type: "Headphones", logo: category_cellphone, id: 5, path: "/headphones" },
  { type: "Gamepad", logo: category_gamepad, id: 6, path: "/gamepad" },
];

const FlashRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-gray-700 font-medium text-xs md:text-md">Days</p>
        <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
          {days}
        </h2>
      </div>
      <span className="text-2xl text-red-700">:</span>

      <div className="flex flex-col space-y-2 items-center justify-center">
        <p className="text-gray-700 font-medium text-xs md:text-md">Hours</p>
        <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
          {hours}
        </h2>
      </div>
      <span className="text-2xl text-red-700">:</span>

      <div className="flex flex-col space-y-2 items-center justify-center">
        <p className="text-gray-700 font-medium text-xs md:text-md">Minutes</p>
        <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
          {minutes}
        </h2>
      </div>
      <span className="text-2xl text-red-700">:</span>

      <div className="flex flex-col space-y-2 items-center justify-center">
        <p className="text-gray-700 font-medium text-xs md:text-md">Seconds</p>
        <h2 className="text-gray-700 text-xl font-bold md:text-2xl lg:text-4xl">
          {seconds}
        </h2>
      </div>
    </div>
  );
};

const ProductCategoryRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: any) => {
  return (
    <div className="flex justify-start items-center space-x-2 md:space-x-3">
      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-sm md:text-2xl font-bold text-gray-700">{hours}</h2>
        <h4 className="text-ellipsis overflow-hidden text-center text-xs md:text-base lg:text-md font-light text-gray-600">
          Hours
        </h4>
      </div>

      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-sm md:text-2xl font-bold text-gray-700">{days}</h2>
        <h4 className="text-ellipsis overflow-hidden text-center text-xs md:text-base lg:text-md font-light text-gray-600">
          Days
        </h4>
      </div>

      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-sm md:text-2xl font-bold text-gray-700">
          {minutes}
        </h2>
        <h4 className="text-ellipsis overflow-hidden text-center text-xs md:text-base lg:text-md font-light text-gray-600">
          Minutes
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 md:w-20 md:h-20 bg-gray-300">
        <h2 className="text-sm md:text-2xl font-bold text-gray-700">
          {seconds}
        </h2>
        <h4 className="text-ellipsis overflow-hidden text-center text-xs md:text-base lg:text-md font-light text-gray-600">
          Seconds
        </h4>
      </div>
    </div>
  );
};

export default function Home() {
  //Internal state
  const [visible, setVisible] = useState<Boolean>(true);
  const [scrollVisible, setScrollVisible] = useState<Boolean>(false);

  const { products, shopList, bestSelling, authenticated, setCart, cart } =
    useContext(AppContext);
  //redirect if not Authenticated
  if (!authenticated) {
    return redirect("/sign-in");
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setScrollVisible(true);
    } else if (scrolled <= 500) {
      setScrollVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const isSeen = visible ? (
    <IoEyeOutline className="w-6 h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-6 h-6 text-gray-700" />
  );

  return (
    <div className="min-w-full space-y-10">
      {/* Showcase  */}

      <div className="container  md:space-x-4 flex justify-between items-stretch mx-auto mb-1 mt-2">
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

      <div className="space-y-16 divide-y divide-slate-200">
        {/* Today Sale */}
        <div className="container flex flex-col justify-center space-y-6  mx-auto">
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
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl lg:text-4xl">
              Flash Sales
            </h2>
            <Countdown
              renderer={FlashRenderer}
              date={Date.now() + 331200000 /*4days */}
            />

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
            {shopList.map((item: ItemType) => (
              <div
                key={item.ID}
                className={`relative flex flex-col space-y-2 ml-4`}
              >
                <div className="relative w-48 h-48 bg-gray-100 rounded-sm flex items-center justify-center md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <button className="absolute left-4 top-4 rounded-md p-1 bg-red-600 text-xs text-gray-50 font-medium">
                    -{item.perc_discount}%
                  </button>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                  />
                  <div className="absolute top-4 right-2 flex flex-col space-y-4">
                    <button className="bg-gray-100">
                      <IoHeartOutline className="w-6 h-6 text-gray-700" />
                    </button>
                    <button className="bg-gray-100">{isSeen}</button>
                  </div>

                  <button
                    className="absolute bottom-0  text-center text-gray-100  p-2 bg-gray-800"
                    style={{ width: "100%" }}
                    onClick={() => setCart(cart + 1)}
                  >
                    Add To Cart
                  </button>
                </div>
                <Link href={item.path} className="space-y-2 mb-4">
                  <h4 className="text-gray-700 text-md font-medium">
                    {item.name}
                  </h4>

                  <h4 className="space-x-3 font-medium">
                    <span className="text-red-500">${item.amount}</span>
                    <span className="text-gray-400 line-through">
                      ${item.prevAmount}
                    </span>
                  </h4>

                  <span className="text-gray-400">Rating ({item.rating})</span>
                </Link>
              </div>
            ))}
          </div>
          <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
            View All Products
          </button>
        </div>

        {/* Categories */}
        <div className="container pt-16 flex flex-col justify-center space-y-6  mx-auto pb-8">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-base font-medium md:text-lg">
                Categories
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl lg:text-4xl">
              Browse By Categories
            </h2>

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
          <div className="flex flex-wrap  items-center justify-start  space-x-4  mb-6">
            {Categories.map((category: CategoryType) => (
              <Link
                href={category.path}
                key={category.id}
                className="w-24 h-20 lg:w-32 lg:h-28 py-4 px-8 text-xs md:text-sm text-gray-600 border border-gray-200 rounded-sm flex flex-col items-center justify-center ml-4 mb-4 hover:bg-red-500 hover:text-gray-100"
              >
                <Image
                  src={category.logo}
                  alt={`${category.type} logo`}
                  className="w-2/3 h-2/3 md:w-2/4 md:h-2/4 mb-2"
                />
                {category.type}
              </Link>
            ))}
          </div>
          <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
            View All Products
          </button>
        </div>

        {/* Best selling Products */}
        <div className="container flex flex-col justify-center space-y-6  mx-auto pt-16">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-base font-medium md:text-lg">
                This Month
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl lg:text-4xl">
              Best Selling Products
            </h2>

            <button className="self-center rounded w-28 bg-red-600 text-gray-100 text-sm font-normal text-center p-2">
              View All
            </button>
          </div>

          {/* items */}
          <div
            className="flex space-x-6 items-center mb-6"
            style={{ overflowX: "scroll" }}
          >
            {bestSelling.map((item: ProductType) => (
              <div
                key={item.ID}
                className={`relative flex flex-col space-y-2 ml-4`}
              >
                <div className="relative w-48 h-48 bg-gray-100 rounded-sm flex items-center justify-center md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                  />
                  <div className="absolute z-50 top-4 right-2 flex flex-col space-y-4">
                    <button
                      className="bg-gray-100"
                      onClick={() => alert("Item Added To Your Favorites")}
                    >
                      <IoHeartOutline className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      className="bg-gray-100"
                      onClick={() => alert("Seen!")}
                    >
                      {isSeen}
                    </button>
                  </div>

                  <button
                    className="absolute bottom-0 z-50 text-center text-gray-100 self-end p-2 bg-gray-800"
                    style={{ width: "100%" }}
                    onClick={() => setCart(cart + 1)}
                  >
                    Add To Cart
                  </button>
                </div>
                <Link href={item.path} className="space-y-2 mb-4">
                  <h4 className="text-gray-700 text-md font-medium">
                    {item.name}
                  </h4>

                  <h4 className="space-x-3 font-medium">
                    <span className="text-red-500">${item.amount}</span>
                    <span className="text-gray-400 line-through">
                      ${item.prevAmount}
                    </span>
                  </h4>

                  <span className="text-gray-400">Rating ({item.rating})</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Categories2 */}
      <div className="container mx-auto pb-8">
        <div className="py-12 bg-gray-900 space-x-4 flex items-center justify-around">
          <div className="space-y-8 flex flex-col">
            <h4 className="text-green-400 font-medium text-lg md:text-2xl">
              Categories
            </h4>
            <div>
              <h2 className="text-2xl font-bold text-gray-200 md:text-4xl lg:text-6xl">
                Enhance Your
              </h2>
              <h2 className="text-2xl font-bold text-gray-200 md:text-4xl lg:text-6xl">
                Music Experience
              </h2>
            </div>
            <Countdown
              renderer={ProductCategoryRenderer}
              date={Date.now() + 496800000 /*6days */}
            />

            <button className="p-4 w-32 flex items-center justify-center h-10 bg-green-500 font-normal text-gray-100 text-sm md:text-lg rounded-sm">
              Buy Now!
            </button>
          </div>
          <Image
            src={jbl_boombox}
            alt="category image"
            className="w-1/3 h-2/3"
          />
        </div>
      </div>

      <div className="space-y-16 divide-y divide-slate-200 pb-8">
        {/* Today Sale */}
        <div className="container flex flex-col justify-center space-y-6  mx-auto">
          <div className="ml-4">
            {/* Bullet  */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-3 bg-red-600 rounded-sm" />
              <h4 className="text-red-600 text-base font-medium md:text-lg">
                Our Products
              </h4>
            </div>
          </div>

          {/* Heading  */}
          <div className="flex px-4 justify-between items-center space-x-6">
            <h2 className="text-gray-700 text-lg font-medium md:text-2xl lg:text-4xl">
              Explore Our Products
            </h2>

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
          <div className="self-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mb-6 px-4 md:px-0">
            {products.map((item: TrendingProductsType) => (
              <div key={item.ID} className={`relative flex flex-col space-y-4`}>
                <div className="relative w-40 h-40 bg-gray-100 rounded-sm flex items-center justify-center md:w-56 md:h-56 lg:w-60 lg:h-60">
                  {item.isNew ? (
                    <button className="absolute left-4 top-4 rounded-md p-1 bg-green-400 text-xs md:text-sm text-gray-50 font-base text-center w-12 h-8">
                      New
                    </button>
                  ) : null}
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-2/5 h-2/5"
                  />
                  <div className="absolute top-4 right-4 z-50 flex flex-col space-y-4">
                    <button className="bg-gray-100">
                      <IoHeartOutline className="w-6 h-6 text-gray-700" />
                    </button>
                    <button className="bg-gray-100">{isSeen}</button>
                  </div>

                  <button
                    onClick={() => setCart(cart + 1)}
                    className="absolute bottom-0 z-50  text-center text-gray-100  p-2 bg-gray-800"
                    style={{ width: "100%" }}
                  >
                    Add To Cart
                  </button>
                </div>
                <Link href={item.path} className="space-y-2 mb-4">
                  <h4 className="text-gray-700 font-medium">{item.name}</h4>

                  <h4 className="space-x-3 font-medium">
                    <span className="text-red-500">${item.amount}</span>
                    {item.prevAmount ? (
                      <span className="text-gray-400 line-through">
                        ${item.prevAmount}
                      </span>
                    ) : null}
                  </h4>
                  <span className="text-gray-400">Rating ({item.rating})</span>

                  {item.colors ? (
                    <div className="flex items-center space-x-2">
                      {item.colors.map((color: string) => (
                        <button
                          key={color}
                          className="w-4 h-4 lg:w-5 lg:h-5 rounded-xl hover:outline-2 hover:outline-gray-800"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  ) : null}
                </Link>
              </div>
            ))}
          </div>
          <button className="self-center rounded w-56 bg-red-600 text-gray-100 text-base text-center p-2">
            View All Products
          </button>
        </div>
      </div>

      {/* Featured */}
      <div className="container pt-16 flex flex-col justify-center space-y-6  mx-auto pb-8 px-4 md:px-0">
        <div className="ml-4">
          {/* Bullet  */}
          <div className="flex items-center space-x-2">
            <div className="h-7 w-3 bg-red-600 rounded-sm" />
            <h4 className="text-red-600 text-base font-medium md:text-lg">
              Featured
            </h4>
          </div>
        </div>

        {/* Heading  */}
        <div className="flex px-4 justify-between items-center space-x-6">
          <h2 className="text-gray-700 text-lg font-medium md:text-2xl lg:text-4xl">
            New Arrival
          </h2>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-2">
          <div className="bg-playStation bg-right bg-contain bg-no-repeat h-96 flex-1 flex items-end bg-black p-8">
            <div className="space-y-3">
              <h2 className="text-gray-200 text-lg font-medium md:text-2xl lg:text-4xl">
                PlayStation 5
              </h2>
              <p className="text-gray-400 text-sm font-medium md:text-md lg:text-lg">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-gray-200 font-medium text-sm md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col item-stretch space-y-3">
            <div className="flex-1 flex items-end bg-womenCollection bg-black bg-right bg-contain bg-no-repeat p-6">
              <div className="space-y-3">
                <h2 className="text-gray-200 text-lg font-medium md:text-2xl lg:text-4xl">
                  Women's Collections
                </h2>
                <p className="text-gray-400 text-sm font-medium md:text-md lg:text-lg">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="text-gray-200 font-medium text-sm md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex-1 flex space-x-4 items-stretch justify-stretch">
              <div className="flex-1 flex items-end bg-speakers bg-black  bg-right bg-contain bg-no-repeat p-6">
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-lg font-medium md:text-2xl lg:text-2xl">
                    Speakers
                  </h2>
                  <p className="text-gray-400 text-xs font-medium md:text-md lg:text-lg">
                    Amazon wireless speakers
                  </p>
                  <button className="text-gray-200 font-medium text-xs md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="flex-1 flex items-end bg-perfums bg-black  bg-right bg-contain bg-no-repeat p-6">
                <div className="space-y-3">
                  <h2 className="text-gray-200 text-lg font-medium md:text-2xl lg:text-2xl">
                    Perfums
                  </h2>
                  <p className="text-gray-400 text-xs font-medium md:text-md lg:text-lg">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="text-gray-200 font-medium text-xs md:text-md lg:text-lg py-1 border-b border-b-gray-400 hover:text-gray-100">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 py-16 md:justify-evenly">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Icon  */}
            <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full p-2 border-8 border-gray-400">
              <Image src={icon_delivery} alt="icon delivery" />
            </button>

            <h2 className="text-gray-800 text-center text-sm font-medium md:text-lg lg:text-xl">
              FREE AND FAST DELIVERY
            </h2>

            <p className="text-gray-600 text-center text-xs font-medium md:text-sm lg:text-md">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Icon  */}
            <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full p-2 border-8 border-gray-400">
              <Image src={icon_customer_service} alt="icon delivery" />
            </button>

            <h2 className="text-gray-800 text-sm text-center font-medium md:text-lg lg:text-xl">
              24/7 CUSTOMER SERVICE
            </h2>

            <p className="text-gray-600 text-xs text-center font-medium md:text-sm lg:text-md">
              Friendly 24/7 customer support
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Icon  */}
            <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full p-2 border-8 border-gray-400">
              <Image src={icon_secure} alt="icon delivery" />
            </button>

            <h2 className="text-gray-800 text-sm text-center font-medium md:text-lg lg:text-xl">
              MONEY BACK GUARANTEE
            </h2>

            <p className="text-gray-600 text-xs text-center font-medium md:text-sm lg:text-md">
              We reurn money within 30 days
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="p-4 w-12 h-12 z-50 fixed bottom-10 bg-gray-200 rounded-full"
            style={{ display: scrollVisible ? "block" : "none" }}
            onClick={scrollToTop}
          >
            <Image src={arrow_up} alt="logo arrow_up" />
          </button>
        </div>
      </div>
    </div>
  );
}
