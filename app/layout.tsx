import "./globals.css";
import { AppbarComponent } from "./components/appBar";
import { Footer } from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col min-h-screen">
          <AppbarComponent />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
