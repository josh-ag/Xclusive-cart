import Link from "next/link";

import {
  IoMenuOutline,
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
  { title: "Signup", path: "/signup" },
];

export const AppbarComponent = () => {
  return (
    <div className="min-w-full border-0 border-b border-slate-300">
      <div className="container flex justify-between md:justify-center items-center mx-auto p-2">
        {/* Logo section */}
        <Link
          href="/"
          className="basis-1/4 font-medium text-xl text-center lg:text-2xl"
        >
          XClusive
        </Link>

        {/* Navigation section  */}
        <div className="hidden basis-2/3 md:flex justify-center space-x-4">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} className="text-sm lg:text-base">
              {item.title}
            </Link>
          ))}
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
          <Link href="/search" className="md:hidden">
            <IoSearchOutline size={24} className="text-gray-600" />
          </Link>
          <Link href={"/"}>
            <IoHeartOutline size={24} className="text-gray-600" />
          </Link>
          <Link href={"/cart"}>
            <IoCartOutline size={24} className="text-gray-600" />
          </Link>

          <button className="p-1 rounded-md ring-1 ring-gray-400 md:hidden">
            <IoMenuOutline size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};
