import "./globals.css";
import { AppContextProvider } from "./Context/appContext";
import { AppbarComponent } from "./Components/appBar";
import { Footer } from "./Components/footer";
import { TopBarComponent } from "./Components/topBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <html lang="en">
        <body>
          <TopBarComponent />
          <main className="relative flex flex-col min-h-screen h-full w-full">
            <AppbarComponent />
            <div className="flex-1 min-h-full h-full min-w-full w-full">
              {children}
            </div>
            <Footer />
          </main>
        </body>
      </html>
    </AppContextProvider>
  );
}
