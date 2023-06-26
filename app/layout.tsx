import "./globals.css";

import { Raleway } from "next/font/google";
import { AppContextProvider } from "./Context/appContext";
import { AppbarComponent } from "./Components/appBar";
import { Footer } from "./Components/footer";
import { TopBarComponent } from "./Components/topBar";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <AppContextProvider>
          <TopBarComponent />
          <main className="relative flex flex-col min-h-screen h-full w-full">
            <AppbarComponent />
            <div className="flex-1 flex flex-col justify-center min-h-full h-full min-w-full w-full">
              {children}
            </div>
            <Footer />
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
