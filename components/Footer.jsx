import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full bg-black p-8 border-b shadow-sm">
      <div className="flex justify-center">
        <Link href="/AdminPage" className="text-white">
          Are you the site owner?
        </Link>
      </div>
    </div>
  );
}

export default Footer;
