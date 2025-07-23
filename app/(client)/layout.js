"use client";

import { Outfit } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideFooter = pathname.toLowerCase().startsWith("/adminpage");

  return (
    <ClerkProvider>
      <div className={`${outfit.className} antialiased`}>
        <NavBar />
        {children}
        {!hideFooter && <Footer />}
      </div>
    </ClerkProvider>
  );
}
