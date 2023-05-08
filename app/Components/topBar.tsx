import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";

export const TopBarComponent = () => {
  return (
    <div className="bg-slate-900 min-w-full flex items-center p-4">
      <div className="container flex items-center justify-center space-x-20 mx-auto">
        <div className="flex space-x-4">
          <p className="text-gray-300 text-center text-xs md:text-base lg:text-md">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link
            href="/shop"
            className="text-white text-xs md:text-base lg:text-md hover:underline"
          >
            Shop Now
          </Link>
        </div>
        <div className="hidden items-center justify-center space-x-2 md:flex">
          <button className="text-gray-300 text-sm md:text-md lg:text-lg">
            English
          </button>
          <IoChevronDownOutline size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};
