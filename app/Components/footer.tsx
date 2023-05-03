import Image from "next/image";
import Link from "next/link";
import barScanner from "../../assets/images/Qr Code.png";
import btnAppstore from "../../assets/images/btn_appstore.png";
import btnPlaystore from "../../assets/images/btn_playstore.png";

export const Footer = () => {
  return (
    <div className="min-w-full w-full bg-slate-900 flex items-center min-h-80 h-full p-4 py-8">
      <div className="container grid grid-flow-row grid-rows-4 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:grid-rows-2 lg:grid-rows-2  xl:grid-rows-1 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-200 md:text-2xl lg:text-4xl">
            Xclusive
          </h2>
          <h4 className="text-md font-bold text-center mb-2 text-gray-200 md:text-xl lg:text-2xl">
            Subscribe
          </h4>
          <p className="text-sm text-center mb-1 text-gray-300 md:text-md lg:text-lg">
            Get 10% off your first order
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-center text-gray-100 w-auto h-auto p-1 bg-slate-800 rounded-md focus:border-slate-500 focus:ring-slate-400"
          />
        </div>

        <div>
          <h4 className="tex-lg mb-2 text-center font-medium text-gray-200 md:text-xl lg:text-2xl">
            Support
          </h4>
          <div className="mb-2">
            <p className="text-base text-center text-gray-300 md:text-md lg:text-lg">
              111 Rd., Km15, Ikeja
            </p>
            <p className="text-base text-center text-gray-300 md:text-md lg:text-lg">
              Lagos, Nigeria
            </p>
          </div>
          <div>
            <p className="text-base text-center text-gray-300 md:text-md lg:text-lg">
              xclusive-cart@gmail.com
            </p>
            <p className="text-base text-center text-gray-300 md:text-md lg:text-lg">
              +88015-88888-9999
            </p>
          </div>
        </div>

        <div className="flex space-y-1 flex-col items-center">
          <h4 className="tex-lg mb-2 text-center font-medium text-gray-200 md:text-xl lg:text-2xl">
            Account
          </h4>
          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            My account
          </Link>
          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Log-in/register
          </Link>

          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Cart
          </Link>
          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Wishlist
          </Link>

          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Shop
          </Link>
        </div>

        <div className="flex space-y-1 items-center flex-col">
          <h4 className="text-lg mb-2 font-medium text-center text-gray-200 md:text-xl lg:text-2xl">
            Quick link
          </h4>
          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Privacy policy
          </Link>

          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Terms of use
          </Link>

          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
          >
            Contact
          </Link>
          <Link
            href="/account"
            className="text-base text-center text-gray-400 hover:text-gray-200 md:text-md lg:text-lg"
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
            <div className="flex items-center justify-center space-x-2 mt-2">
              <Image
                alt="bar scanner"
                src={barScanner}
                width={80}
                height={80}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <div className="space-y-2">
                <Image
                  alt="logo playstore"
                  src={btnPlaystore}
                  width={110}
                  height={40}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Image
                  alt="logo appstore"
                  src={btnAppstore}
                  width={110}
                  height={40}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7H10.5L10 9H6V18H4V9H0V7H4V5.128C4 3.345 4.186 2.698 4.534 2.046C4.87501 1.40181 5.40181 0.875009 6.046 0.534C6.698 0.186 7.345 0 9.128 0C9.65 0 10.108 0.0500001 10.5 0.15V2H9.128C7.804 2 7.401 2.078 6.99 2.298C6.686 2.46 6.46 2.686 6.298 2.99C6.078 3.401 6 3.804 6 5.128V7Z"
                  fill="white"
                />
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z"
                  fill="white"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_825_5527)">
                  <path
                    d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.877 10.4214 12.877 10.4214 12.877 10.4214M12.877 10.4213V10.4214M12.877 10.4214C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4214ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8715 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57663 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                    fill="white"
                    stroke="black"
                    stroke-width="0.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_825_5527">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
