// "use client";

// import { useContext } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
// import { AppContext } from "./Context/appContext";
import showcaseImage from "../assets/images/iphone.png";
import appleLogo from "../assets/icons/apple_logo.svg";
import arrowRight from "../assets/icons/arrow-right.svg";

const inter = Inter({ subsets: ["latin"] });

const sideNav = [
  { name: "Women's Fashion", path: "/fashion/women" },
  { name: "Men's Fashion", path: "/fashion/men" },
  { name: "Electronics", path: "/electronics" },
  { name: "Home & Lifestyle", path: "/lifestyle" },
  { name: "Medicine", path: "/medicine" },
  { name: "Sports & Outdoor", path: "/sport" },
  { name: "Baby's & Toy", path: "/toy" },
  { name: "Groceries & Pets", path: "/groceries" },
  { name: "Health & Beauty", path: "/health" },
];

export default function Home() {
  // const { authenticated } = useContext(AppContext);

  // console.log(authenticated);

  return (
    <div className="min-w-full">
      <div className="container flex justify-center items-center mx-auto">
        <div className="basis-1/4 hidden flex-col items-center self-center space-y-2 border-r border-slate-300 p-4 md:flex">
          <div className="flex flex-col">
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
        <div className="flex-1 md:basis-3/4 p-2">
          <div className="bg-gray-900 p-4 flex items-center justify-evenly">
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
                className="flex items-center justify-start text-gray-300 font-medium underline"
              >
                Show Now
                <Image src={arrowRight} alt="arrow" className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <Image
              src={showcaseImage}
              className="w-40 h-36 md:w-52 md:h-40 lg:w-60 lg:h-48"
              alt="showcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
