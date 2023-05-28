import Image from "next/image";
import shopping_cart from "../../assets/images/shopping.png";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="flex items-center my-4 h-auto">
      <div className="h-full w-full grid grid-cols-1 grid-rows-1  md:grid-cols-2 space-y-8">
        <Image src={shopping_cart} alt="shopping cart" className="h-full" />
        <div className="w-2/3 flex flex-col items-center justify-center space-y-8 py-4 mx-auto">
          <div className="w-full space-y-3">
            <h2 className="text-gray-800 text-xl font-medium md:text-2xl lg:text-4xl">
              Log in to Xclusive
            </h2>
            <p className="text-gray-600 text-base md:text-md lg:text-lg">
              Enter your details below
            </p>
          </div>
          <div className="w-full space-y-4">
            <input
              placeholder="Email or Phone Number"
              className="w-full block border-b text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2"
            />
            <input
              placeholder="Password"
              className="w-full block border-b text-gray-600 text-base placeholder-gray-400 border-gray-300 p-2"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <button className="w-28 text-lg bg-red-600 font-medium text-gray-100 p-2 rounded">
              Log In
            </button>
            <Link href="/forgot-password" className="text-red-500 text-base">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
