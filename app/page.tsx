import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container">
      <p className="text-center text-lg">Home Page</p>
    </main>
  );
}
