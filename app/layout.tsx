import "./globals.css";
import { AppbarComponent } from "./components/appBar";
import { Footer } from "./components/footer";
import { TopBarComponent } from "./components/topBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
