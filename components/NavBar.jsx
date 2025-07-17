import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { House, ShoppingBasket, ShoppingCart } from "lucide-react";

function NavBar() {
  return (
    <div className="flex justify-between p-5 relative  min-h-[80px]">
      <div className="text-2xl">STARCOMMERCE</div>
      <div className="p-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 border-2 border-black rounded-4xl shadow-2xl">
        <Button className="rounded-full">
          <Link href="/ProductsPage">
            <ShoppingCart />
          </Link>
        </Button>
        <Button className="rounded-full">
          <Link href="/">
            <House />
          </Link>
        </Button>
        <Button className="rounded-full">
          <Link href="/ShoppingCart">
            <ShoppingBasket />
          </Link>
        </Button>
      </div>
      <Button>Login</Button>
    </div>
  );
}

export default NavBar;
