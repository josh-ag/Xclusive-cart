// "use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";

import showcaseImage from "../assets/images/iphone.png";
import appleLogo from "../assets/icons/apple_logo.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

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

export default function Home() {
  return (
    <div className="min-w-full space-y-8">
      {/* Showcase  */}
      <div className="container md:space-x-4 flex justify-between items-stretch mx-auto mb-1">
        <div className="hidden flex-col justify-starrt space-y-2 border-r border-slate-300 p-4 md:flex">
          <div className="flex self-start flex-col">
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
      <div className="container flex flex-col justify-center space-y-4  mx-auto mb-1">
        <div className="ml-4">
          {/* Bullet  */}
          <div className="flex items-center space-x-2">
            <div className="h-7 w-3 bg-red-600 rounded-sm" />
            <h4 className="text-red-600 text-base md:text-lg">Today's</h4>
          </div>
        </div>

        {/* Heading  */}
        <div className="flex px-4 justify-between items-center space-x-6">
          <h2 className="text-gray-700 text-base font-medium md:text-2xl lg:text-4xl">
            Flash Sales
          </h2>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-xs md:text-md">Days</p>
              <h2 className="text-gray-700 text-base font-medium md:text-2xl lg:text-4xl">
                03
              </h2>
            </div>
            <span className="text-2xl text-red-700">:</span>

            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-xs font-normal">Hours</p>
              <h2 className="text-gray-700 text-base font-medium md:text-2xl lg:text-4xl">
                23
              </h2>
            </div>
            <span className="text-2xl text-red-700">:</span>

            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-xs font-normal">Minutes</p>
              <h2 className="text-gray-700 text-base font-medium md:text-2xl lg:text-4xl">
                19
              </h2>
            </div>
            <span className="text-2xl text-red-700">:</span>

            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-sm font-normal">Seconds</p>
              <h2 className="text-gray-700 text-base font-medium md:text-2xl lg:text-4xl">
                56
              </h2>
            </div>
          </div>

          <div className="flex basis-2/4 items-center justify-end">
            <button className="bg-gray-200 rounded-lg mr-2 p-1">
              <IoArrowBackOutline size={20} className="text-gray-500" />
            </button>
            <button className="bg-gray-200 rounded-lg p-1">
              <IoArrowForwardOutline size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
