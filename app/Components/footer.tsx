import Image from "next/image";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import {
  IoLogoGooglePlaystore,
  IoLogoApple,
  IoLogoInstagram,
} from "react-icons/io5";
import QrCode from "../../assets/icons/Qr Code.svg";
import iconSend from "../../assets/icons/icon-send.svg";

export const Footer = () => {
  return (
    <div className="min-w-full w-full bg-slate-900 flex flex-col items-center min-h-80 h-full p-8">
      <div className="container grid grid-flow-row grid-rows-4 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:grid-rows-2 lg:grid-rows-2  xl:grid-rows-1 mx-auto">
        <div>
          <h2 className="text-xl font-bold text-center mb-4 text-gray-200 md:text-2xl lg:text-4xl">
            Xclusive
          </h2>

          <div className="flex flex-col items-center">
            <h4 className="text-md font-bold text-center mb-2 text-gray-200 md:text-xl lg:text-2xl">
              Subscribe
            </h4>
            <p className="text-center mb-1 text-gray-300 md:text-md lg:text-lg">
              Get 10% off your first order
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-center text-gray-100 p-2 pr-10 w-60 md:w-52 h-auto bg-slate-800 rounded-md focus:ring-2 focus:ring-slate-400"
              />
              <Image
                src={iconSend}
                alt="send"
                style={{ marginLeft: "-2rem" }}
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="tex-lg mb-1 text-center font-medium text-gray-200 md:text-xl lg:text-2xl">
            Support
          </h4>
          <div className="mb-2">
            <p className="text-center text-gray-300 md:text-md lg:text-lg">
              111 Rd., Km15, Ikeja
            </p>
            <p className="text-center text-gray-300 md:text-md lg:text-lg">
              Lagos, Nigeria
            </p>
          </div>
          <div>
            <p className="text-center text-gray-300 md:text-md lg:text-lg">
              xclusive-cart@gmail.com
            </p>
            <p className="text-center text-gray-300 md:text-md lg:text-lg">
              +88015-88888-9999
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="tex-lg mb-1 text-center font-medium text-gray-200 md:text-xl lg:text-2xl">
            Account
          </h4>
          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            My account
          </Link>
          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Log-in/register
          </Link>

          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Cart
          </Link>
          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Wishlist
          </Link>

          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Shop
          </Link>
        </div>

        <div className="flex items-center flex-col">
          <h4 className="text-lg mb-1 font-medium text-center text-gray-200 md:text-xl lg:text-2xl">
            Quick link
          </h4>
          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Privacy policy
          </Link>

          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Terms of use
          </Link>

          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Contact
          </Link>
          <Link
            href="/account"
            className="text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            FAQ
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg mb-2 text-center font-medium text-gray-200 md:text-xl lg:text-2xl">
            Download App
          </h4>

          <div>
            <p className="text-sm text-center text-gray-300 md:text-sm lg:text-md">
              Save $3 With App New Users Only
            </p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <Image src={QrCode} alt="qrcode" className="w-24 h-24" />
              <div className="space-y-2">
                <button className="flex w-40 h-12 space-x-2 items-center justify-center ring-1 p-2 rounded-lg ring-slate-400">
                  <IoLogoGooglePlaystore size={27} className="text-gray-300" />
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-300 text-left text-sm font-light">
                      GET IT ON
                    </p>
                    <p className="text-gray-300 font-bold text-md text-center">
                      Google Play
                    </p>
                  </div>
                </button>
                <button className="flex w-40 h-12 space-x-2 items-center justify-center ring-1 p-2 rounded-lg ring-slate-400">
                  <IoLogoApple size={27} className="text-gray-300" />
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-gray-300 text-left text-sm font-light">
                      Download on the
                    </p>
                    <p className="text-gray-300 font-bold text-md text-center">
                      App Store
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Link href="http://facebook.com">
                <TiSocialFacebook size={24} className="text-gray-300" />
              </Link>
              <Link href="http://twitter.com">
                <TiSocialTwitter size={24} className="text-gray-300" />
              </Link>
              <Link href="http://instagram.com">
                <IoLogoInstagram size={20} className="text-gray-300" />
              </Link>

              <Link href="http://linkedin.com">
                <TiSocialLinkedin size={24} className="text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-gray-400 text-sm text-center">
          &copy; Copyright Xclusive-cart 2023. All right reserved.
        </h4>
      </div>
    </div>
  );
};
