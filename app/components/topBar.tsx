import Link from "next/link";

export const TopBarComponent = () => {
  return (
    <div className="bg-slate-900 min-w-full flex items-center h-12">
      <div className="container flex items-center justify-center space-x-12 mx-auto">
        <div className="flex space-x-2 items-center justify-center">
          <h4 className="text-gray-300 text-center text-sm md:text-md lg:text-lg">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h4>
          <Link
            href="/shop"
            className="text-white text-sm md:text-md lg:text-lg hover:underline"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button className="text-gray-300 font-medium text-sm md:text-md lg:text-lg">
            English
          </button>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
