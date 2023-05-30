"use client";

import Link from "next/link";
import { useContext } from "react";
import {
  IoMenuOutline,
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { AppContext } from "../Context/appContext";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
  { title: "Signup", path: "/sign-up" },
];

export const AppbarComponent = () => {
  const { authenticated, setAuthenticated } = useContext(AppContext);

  // useEffect(() => {
  //   setTimeout(() => setAuthenticated(true), 2000);
  // });

  return (
    <div className="min-w-full border-0 border-b border-slate-300">
      <div className="container flex justify-between md:justify-center items-center mx-auto p-2">
        {/* Logo section */}
        <Link
          href="/"
          className="basis-1/4 font-medium text-center text-2xl lg:text-4xl"
        >
          Xclusive
        </Link>

        {/* Navigation section  */}
        <div className="hidden basis-2/3 md:flex justify-center space-x-4">
          <Link href="/home" className="text-sm lg:text-base">
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
          <button className="p-1 rounded-md ring-1 ring-gray-400 md:hidden">
            <IoMenuOutline size={24} className="text-gray-600" />
          </button>
          {authenticated ? (
            <>
              <Link href={"/"}>
                <IoHeartOutline size={24} className="text-gray-600" />
              </Link>
              <Link href={"/carts"}>
                <IoCartOutline size={24} className="text-gray-600" />
              </Link>
              <Link
                href={"/user"}
                className="hover:text-gray-200 hover:bg-red-500 p-1 rounded-full"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
