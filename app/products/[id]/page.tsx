"use client";
import { useContext, useState } from "react";

import { ItemType, PageProps } from "@/type.d";
import { AllProducts } from "@/data/dummyData";
import Image from "next/image";
import {
  IoAddOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoRemoveOutline,
} from "react-icons/io5";
import reload_icon from "../../../assets/icons/reload.svg";
import van_icon from "../../../assets/icons/van.svg";
import Link from "next/link";
import { AppContext } from "@/app/Context/appContext";

export default function ProductDetails({ params: { id } }: PageProps) {
  const [visible, setVisible] = useState<Boolean>(true);

  const { shopList } = useContext(AppContext);

  const isMatch = AllProducts.filter((product) => product.ID == id);
  const uuid = Math.random();

  const isSeen = visible ? (
    <IoEyeOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  ) : (
    <IoEyeOffOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
  );

  return (
    <div className="container mx-auto mb-4 w-full h-auto p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-xs md:text-sm text-gray-400">
          / products /details/
          <span className="text-gray-500 font-medium">{isMatch[0]?.name}</span>
        </h4>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Images  */}
        <div>
          {isMatch[0]?.images?.map((image, id) => (
            <button className="w-24 h-24 bg-gray-200 p-2">
              <Image
                key={4 * uuid + "_"}
                priority={true}
                src={image}
                alt="image details"
                className="w-auto h-auto"
              />
            </button>
          ))}
        </div>
        {/* Main */}
        <div className="flex items-center justify-center">
          {isMatch[0]?.images?.map((image, id) => (
            <Image
              key={5 * uuid + "__"}
              priority={true}
              src={image}
              alt="image details"
              className="w-auto h-auto"
            />
          ))}
        </div>
        {/* Aside  */}
        <form>
          <div className="flex flex-col space-y-8">
            <div className="space-y-2 border-b border-b-gray-300 py-4">
              <h2 className="text-gray-700 text-sm md:text-base lg:text-xl font-medium">
                {isMatch[0].name}
              </h2>

              <span className="text-gray-500 text-sm">
                Rating ({isMatch[0].rating})
              </span>
              <p className="text-gray-700 text-sm md:text-base lg:text-xl font-medium">
                ${isMatch[0].amount}
              </p>

              <p className="text-gray-500 text-sm lg:text-base">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-6">
                <p className="text-gray-500 text-sm lg:text-base">Colors:</p>{" "}
                <div className="flex items-center space-x-2">
                  {isMatch[0].colors?.map((color, id) => (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className="w-4 h-4 rounded-full  hover:scale-110 hover:border-2 hover:border-gray-700"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <p className="text-gray-500 text-sm lg:text-base">Sizes:</p>{" "}
                <div className="flex items-center space-x-2">
                  {isMatch[0].sizes?.map((size, id) => (
                    <button
                      key={3 * id}
                      className="w-6 h-6 rounded border border-gray-300 text-gray-600 text-xs md:text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-6 items-stretch">
                <div className="basis-2/5 flex items-stretch border border-gray-300 divide-x rounded-md">
                  <button className="basis-2/6 text-center flex items-center justify-center">
                    <IoRemoveOutline className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="basis-2/3 text-gray-500 text-lg font-medium">
                    2
                  </button>
                  <button className="basis-2/6 bg-red-500 flex items-center justify-center">
                    <IoAddOutline className="w-5 h-5 text-gray-50" />
                  </button>
                </div>
                <button className="basis-2/4 bg-red-500 p-2 rounded-md text-gray-100 text-base font-medium">
                  Buy Now
                </button>
                <button className="basis-2/12 rounded-md flex items-center justify-center p-2 border border-gray-300">
                  <IoHeartOutline className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-stretch divide-y border border-gray-300 rounded-md">
              <div className="flex items-center justify-start space-x-4 p-4">
                <Image src={van_icon} className="w-8 h-8" alt="logo van" />
                <div>
                  <h4 className="text-gray-700 text-base font-medium">
                    Free Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Enter your postal code for Delivery Availability.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-start space-x-4 p-4">
                <Image src={reload_icon} className="w-8 h-8" alt="logo van" />
                <div>
                  <h4 className="text-gray-700 text-base lg:text font-medium">
                    Return Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Free 30 Days Delivery Returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-4 pt-8">
        {/* Bullet  */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-3 bg-red-600 rounded-sm" />
          <h4 className="text-gray-600 text-base font-medium md:text-lg">
            Related Items
          </h4>
        </div>

        <div className="flex space-x-6 items-stretch overflow-x-auto px-2">
          {shopList.map((item: ItemType) => (
            <div key={item.ID} className={`relative flex flex-col space-y-2`}>
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-gray-100 rounded-sm flex items-center justify-center">
                <button className="absolute left-4 top-4 rounded-md p-1 bg-red-600 text-xs text-gray-50">
                  - {item.perc_discount}%
                </button>
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-2/5 h-2/5"
                  priority={true}
                />
                <div className="absolute top-4 right-2 flex flex-col space-y-3">
                  <button className="bg-gray-100">
                    <IoHeartOutline className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
                  </button>
                  <button className="bg-gray-100">{isSeen}</button>
                </div>

                <button
                  className="absolute w-full bottom-0 text-sm lg:text-base  text-center text-gray-100  p-2 bg-gray-800"
                  // onClick={() => setCart(cart + 1)}
                >
                  Add To Cart
                </button>
              </div>
              <Link href={`${item.path}/${item.ID}`} className="space-y-2 mb-4">
                <h4 className="text-gray-700 text-sm lg:text-base font-medium">
                  {item.name}
                </h4>

                <h4 className="space-x-3 font-medium">
                  <span className="text-red-500 text-sm">${item.amount}</span>
                  <span className="text-gray-400 text-sm line-through">
                    ${item.prevAmount}
                  </span>
                </h4>

                <span className="text-gray-400 text-sm">
                  Rating ({item.rating})
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
