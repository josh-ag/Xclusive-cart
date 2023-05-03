import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import Link from "next/link";
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
        <div className="basis-1/4 hidden md:flex flex-col items-center self-center space-y-2 border-r border-slate-300 p-4">
          <div style={{ width: "70%" }}>
            {sideNav.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="text-sm block text-left text-slate-600 md:text-base lg:text-md rounded-lg p-1 hover:bg-sky-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="basis-3/4  py-12 px-8">
          {/* <Slider {...settings}>
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
