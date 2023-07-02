"use client";

import { PageProps } from "@/type.d";
import { AllProducts } from "@/data/dummyData";
import Image from "next/image";

export default function ProductDetails({ params: { id } }: PageProps) {
  const isMatch = AllProducts.filter((product) => product.ID == id);

  const uuid = Math.random();
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
        <div className="flex flex-col space-y-4">
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
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-6">
              <p className="text-gray-500 text-sm lg:text-base">Colors:</p>{" "}
              <div className="flex items-center space-x-2">
                {isMatch[0].colors?.map((color, id) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-4 h-4 rounded-full  hover:scale-110 hover:border hover:border-gray-700"
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
                    className="w-6 h-6 rounded border border-gray-700 text-xs md:text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
