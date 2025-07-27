import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House, ShoppingBasket, UserRound, Star } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="relative flex justify-between items-center px-6 h-20 border-b shadow-sm">
      <Link href="/">
        <div className="flex">
          <Star className="mt-[6px]" />
          <div className="text-3xl font-semibold">COMMERCE</div>
        </div>
      </Link>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button className="rounded-full h-10 w-10 p-0">
          <Link href="/ProfilePage">
            <UserRound />
          </Link>
        </Button>
        <Button className="rounded-full h-10 w-10 p-0">
          <Link href="/">
            <House />
          </Link>
        </Button>
        <Button className="rounded-full h-10 w-10 p-0">
          <Link href="/ShoppingCart">
            <ShoppingBasket />
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton mode="modal">
            <Button
              variant="default"
              className="bg-black text-white h-10 text-sm px-4"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
}

export default NavBar;
