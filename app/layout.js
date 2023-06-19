import Header from "@/components/Primary/Header/Header";
import "./globals.css";
import { Poppins, Spectral } from "next/font/google";
import Footer from "@/components/Primary/Footer";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});
export const spectralFont = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: false,
});

export const metadata = {
  title: "Payneer Alpha Next App",
  description: "Coding test application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
