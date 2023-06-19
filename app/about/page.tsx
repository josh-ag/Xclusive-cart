import Image from "next/image";
import about_image from "../../assets/images/side_image.png";
import icon_delivery from "../../assets/icons/icon-delivery.svg";
import icon_customer_service from "../../assets/icons/Icon-Customer_service.svg";
import icon_secure from "../../assets/icons/Icon-secure.svg";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMusicalNoteOutline,
  IoStorefrontOutline,
} from "react-icons/io5";

export default function Page() {
  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-10 lg:space-y-20">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-base font-medium text-gray-400 d:text-base lg:text-lg">
          / <span className="text-gray-500 font-medium">About</span>
        </h4>
      </header>

      <div className="flex justify-between items-center flex-wrap-reverse md:flex-nowrap">
        <div className="basis-full md:basis-2/5 space-y-4">
          <h2 className="text-2xl lg:text-4xl text-gray-800 font-medium">
            Our Story
          </h2>
          <p className="text-sm lg:text-base text-gray-500">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>

          <p className="text-sm lg:text-base text-gray-500">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="basis-full md:basis-3/4 flex justify-center md:justify-end mb-8">
          <Image src={about_image} alt="about image" className="w-3/4 h-2/3" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <IoStorefrontOutline className="text-gray-50 w-4 h-4 md:w-6 md:h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-4xl text-inherit">10.5k</h2>

          <h4 className="text-inherit text-sm">Active Sellers On Site</h4>
        </button>

        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <IoMusicalNoteOutline className="text-gray-50  w-4 h-4 md:w-6 md:h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-4xl text-inherit">33k</h2>

          <h4 className="text-inherit text-sm">Monthly Products Sale</h4>
        </button>

        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <IoMusicalNoteOutline className="text-gray-50  w-4 h-4 md:w-6 md:h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-4xl text-inherit">45.5k</h2>

          <h4 className="text-inherit text-sm">Active Customers On Site</h4>
        </button>

        <button className="flex flex-col items-center justify-center p-6 border border-gray-300 space-y-4 rounded hover:bg-red-500 hover:text-gray-50">
          <div className="p-2 border-8 text-inherit border-gray-300 rounded-full bg-gray-900">
            <IoMusicalNoteOutline className="text-gray-50  w-4 h-4 md:w-6 md:h-6" />
          </div>
          <h2 className="font-bold text-xl lg:text-4xl text-inherit">25k</h2>

          <h4 className="text-inherit text-sm">Gross Annual Sales On Site</h4>
        </button>
      </div>

      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-2 lg:gap-10 h-86">
        <div className="h-full flex flex-col space-y-4">
          <div className="bg-gray-200 h-3/4 flex items-end justify-center px-4 pt-4">
            <Image src={person1} alt="admin one" style={{ height: "95%" }} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <h4 className="text-gray-700 text-lg md:text-2xl font-medium">
              Tom Cruise
            </h4>
            <p className="text-sm lg:text-base text-gray-600">
              Founder & chairman
            </p>
            <div className="flex justify-start space-x-2">
              <IoLogoTwitter className="w-3 h-3" />
              <IoLogoInstagram className="w-3 h-3" />
              <IoLogoLinkedin className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col space-y-4">
          <div className="bg-gray-200 h-3/4 flex items-end justify-center px-4 pt-4">
            <Image src={person2} alt="admin two" style={{ height: "95%" }} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <h4 className="text-gray-700 text-lg md:text-2xl font-medium">
              Emma Watson
            </h4>
            <p className="text-sm lg:text-base text-gray-600">
              Managing Director
            </p>
            <div className="flex justify-start space-x-2">
              <IoLogoTwitter className="w-3 h-3" />
              <IoLogoInstagram className="w-3 h-3" />
              <IoLogoLinkedin className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col space-y-4">
          <div className="bg-gray-200 h-3/4 flex items-end justify-center px-4 pt-4">
            <Image src={person3} alt="admin three" style={{ height: "95%" }} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <h4 className="text-gray-700 text-lg md:text-2xl font-medium">
              Will Smith
            </h4>
            <p className="text-sm lg:text-base text-gray-600">
              Product Designer
            </p>
            <div className="flex justify-start space-x-2">
              <IoLogoTwitter className="w-3 h-3" />
              <IoLogoInstagram className="w-3 h-3" />
              <IoLogoLinkedin className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6 md:justify-evenly">
        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full p-2 border-8 border-gray-300">
            <Image src={icon_delivery} alt="icon delivery" />
          </button>

          <h2 className="text-gray-800 text-center text-sm font-medium md:text-lg lg:text-xl">
            FREE AND FAST DELIVERY
          </h2>

          <p className="text-gray-600 text-center text-xs font-medium md:text-sm lg:text-md">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full p-2 border-8 border-gray-300">
            <Image src={icon_customer_service} alt="icon delivery" />
          </button>

          <h2 className="text-gray-800 text-sm text-center font-medium md:text-lg lg:text-xl">
            24/7 CUSTOMER SERVICE
          </h2>

          <p className="text-gray-600 text-xs text-center font-medium md:text-sm lg:text-md">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center justify-center space-y-4">
          {/* Icon  */}
          <button className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full p-2 border-8 border-gray-300">
            <Image src={icon_secure} alt="icon delivery" />
          </button>

          <h2 className="text-gray-800 text-sm text-center font-medium md:text-lg lg:text-xl">
            MONEY BACK GUARANTEE
          </h2>

          <p className="text-gray-600 text-xs text-center font-medium md:text-sm lg:text-md">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
