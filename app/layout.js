import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Star Ecommerce",
  description: "Powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
