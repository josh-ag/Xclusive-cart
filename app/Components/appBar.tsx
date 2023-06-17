"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { AppContext } from "../Context/appContext";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import user_icon from "../../assets/icons/user_icon.svg";
import order_icon from "../../assets/icons/order.svg";
import cancel_icon from "../../assets/icons/icon-cancel.svg";
import review_icon from "../../assets/icons/Icon-Reviews.svg";
import logout_icon from "../../assets/icons/Icon-logout.svg";

type NavlistType = {
  handleClose: (arg: boolean) => any;
};

const NavList = ({ handleClose }: NavlistType) => {
  return (
    <div
      onMouseLeave={() => handleClose(false)}
      onClick={() => handleClose(false)}
      className="absolute flex justify-end w-full h-full top-12 right-0 z-50"
    >
      <div className="flex flex-col items-start justify-center w-72 h-72 bg-gray-600 backdrop-filter backdrop-blur-lg backdrop-opacity-50 rounded-lg p-4 space-y-4">
        <Link href="/account" className="flex items-center space-x-4">
          <Image src={user_icon} alt="order icon" className="w-7 h-7" />
          <p className="text-gray-200 text-base md:text-lg">
            Manage My Account
          </p>
        </Link>
        <Link href="/order" className="flex items-center space-x-4">
          <Image src={order_icon} alt="order icon" className="w-5 h-5" />
          <p className="text-gray-200 text-base md:text-lg">My Order</p>
        </Link>

        <Link href="/cancel" className="flex items-center space-x-4">
          <Image src={cancel_icon} alt="cancel icon" className="w-5 h-5" />
          <p className="text-gray-200 text-base md:text-lg">My Cancellation</p>
        </Link>

        <Link href="/reviews" className="flex items-center space-x-4">
          <Image src={review_icon} alt="review icon" className="w-6 h-6" />
          <p className="text-gray-200 text-base md:text-lg">My Review</p>
        </Link>

        <button className="flex items-center space-x-4">
          <Image src={logout_icon} alt="logout icon" className="w-6 h-6" />
          <p className="text-gray-200 text-base md:text-lg">Logout</p>
        </button>
      </div>
    </div>
  );
};

export const AppbarComponent = () => {
  const { authenticated, cart, wishList } = useContext(AppContext);
  const [navList, setNavList] = useState(false);

  return (
    <div className="min-w-full border-0 border-b border-slate-300">
      <div className="relative container flex justify-between md:justify-center items-center mx-auto p-2">
        {/* Logo section */}
        <Link
          href="/"
          className="basis-1/4 font-medium text-center text-2xl lg:text-4xl"
        >
          Xclusive
        </Link>

        {/* Navigation section  */}
        <div className="hidden basis-2/3 md:flex justify-center space-x-4">
          <Link href="/" className="text-sm lg:text-base">
            Home
          </Link>
          <Link href="/contact" className="text-sm lg:text-base">
            Contact
          </Link>
          <Link href="/about" className="text-sm lg:text-base">
            About
          </Link>
          {!authenticated ? (
            <Link href="/sign-up" className="text-sm lg:text-base">
              Sign-up
            </Link>
          ) : null}
        </div>

        {/* Search section  */}
        <div className="basis-1/4  flex space-x-5 items-center justify-center">
          <div className="relative hidden md:flex items-center">
            <input
              type="search"
              className="form-input rounded-md pr-10 border-0 bg-slate-100 focus:border-slate-500 w-60 focus:ring-slate-400"
              placeholder="What are you looking for?"
            />
            <button className="absolute right-5">
              <IoSearchOutline size={24} className="text-gray-400" />
            </button>
          </div>
          <button className="md:hidden">
            <IoSearchOutline size={24} className="text-gray-600" />
          </button>

          {authenticated ? (
            <>
              <Link href="/wishlist" className="relative">
                <IoHeartOutline size={24} className="text-gray-600" />
                {wishList ? (
                  <button className="absolute flex items-center justify-center text-xs font-bold text-center -top-2 -right-3 bg-red-600 text-gray-200 p-1 w-5 h-5 rounded-full">
                    {wishList?.length}
                  </button>
                ) : null}
              </Link>
              <Link href="/cart" className="relative">
                <IoCartOutline size={24} className="text-gray-600" />
                {cart ? (
                  <button className="absolute flex items-center justify-center text-xs font-bold text-center -top-2 -right-3 bg-red-600 text-gray-200 p-1 w-5 h-5 rounded-full">
                    {cart?.length}
                  </button>
                ) : null}
              </Link>
              <button
                onClick={() => setNavList(!navList)}
                onMouseOver={() => setNavList(true)}
                className="text-gray-700 hover:text-gray-200 hover:bg-red-500 p-1 rounded-full"
              >
                <svg
                  width="30"
                  height="32"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-2 stroke-gray-500 hover:stroke-gray-200"
                >
                  <path
                    d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          ) : null}
        </div>
        {navList && <NavList handleClose={setNavList} />}
      </div>
    </div>
  );
};
