import Header from "@/components/Primary/Header/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Container from "@/components/Primary/Container";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
