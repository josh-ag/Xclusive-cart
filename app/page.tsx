import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-w-full">
      <div className="container flex justify-center items-center mx-auto">
        <div className="basis-1/4 bg-orange-200 py-12 px-8">
          <p>Sidebar Area</p>
        </div>
        <div className="basis-3/4 bg-sky-200  py-12 px-8">
          <h2>Showcase Area</h2>
        </div>
      </div>
    </div>
  );
}
