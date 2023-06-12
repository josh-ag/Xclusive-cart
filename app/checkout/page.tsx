"use client";

import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import { ProductType } from "@/type.d";
import Image from "next/image";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function Page() {
  const { cart } = useContext(AppContext);

  const cartTotal = cart
    ?.map((val: any) => val.amount)
    .reduce((prevVal, currentVal) => prevVal + currentVal);

  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-8">
      {/* Breadcrumb */}
      <header className="flex justify-between items-center">
        <h4 className="text-sm font-medium text-gray-400 md:text-base lg:text-lg">
          Account / My account / product / view cart /{" "}
          <span className="text-gray-500">Checkout</span>
        </h4>
      </header>

      <>
        <h2 className="text-2xl lg:text-4xl font-medium text-gray-700">
          Billing Details
        </h2>

        <div className="flex justify-between items-stretch">
          <div className="flex-1">
            <form className="block space-y-6">
              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  First Name<span className="text-red-400">*</span>
                </span>
                <input
                  name="firstname"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  Company Name
                </span>
                <input
                  name="company"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  Street Address<span className="text-red-400">*</span>
                </span>
                <input
                  name="address"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  Apartment, floor, etc. (optional)
                </span>
                <input className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
              </label>

              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  Town/City<span className="text-red-400">*</span>
                </span>
                <input
                  name="city"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  Phone Number<span className="text-red-400">*</span>
                </span>
                <input
                  name="phone"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block">
                <span className="block text-base font-medium text-slate-500">
                  Email Address<span className="text-red-400">*</span>
                </span>
                <input
                  name="email"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <label className="flex space-x-3 items-center">
                <input
                  type="checkbox"
                  className="appearance-none indeterminate:bg-gray-300 ..."
                />
                <span className="block text-base font-medium text-slate-500">
                  Save this information for faster check-out next time
                </span>
              </label>
            </form>
          </div>

          <div className="flex-1" />
        </div>
      </>
    </div>
  );
}
