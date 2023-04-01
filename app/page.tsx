import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const sideNavItem = [
  { name: "Women's Fashion", path: "/" },
  { name: "Men's Fashion", path: "/" },
  { name: "Electronics", path: "/" },
  { name: "Home & Lifestyle", path: "/" },
  { name: "Medicine", path: "/" },
  { name: "Sports & Outdoor", path: "/" },
  { name: "Baby's & Toy", path: "/" },
  { name: "Groceries & Pets", path: "/" },
  { name: "Health & Beauty", path: "/" },
];

export default function Home() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400,
  };

  return (
    <div className="min-w-full">
      <div className="container flex justify-center items-center mx-auto">
        <div className="basis-1/4 hidden md:flex flex-col space-y-2 p-8 border-r border-slate-300">
          {sideNavItem.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="text-sm block text-center text-slate-600 md:text-base lg:text-md rounded-lg p-1 hover:bg-sky-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="basis-3/4  py-12 px-8">
          {/* <Slider>
            <div>
              <h4 className="text-lg text-center text-medium text-slate-500">
                Slider 1
              </h4>
            </div>
            <div>
              <h4 className="text-lg text-center text-medium text-slate-500">
                Slider 2
              </h4>
            </div>
            <div>
              <h4 className="text-lg text-center text-medium text-slate-500">
                Slider 3
              </h4>
            </div>
            <div>
              <h4 className="text-lg text-center text-medium text-slate-500">
                Slider 4
              </h4>
            </div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
}
