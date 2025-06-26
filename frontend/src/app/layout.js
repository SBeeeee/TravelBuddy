import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "@/utils/Providers";
import Footer from "@/components/Footer";
export const metadata = {
  title: "TripSync",
  description: "TripSync is your go-to platform for effortless, reliable, and eco-friendly travel coordination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
          </Providers>
      </body>
    </html>
  );
}
