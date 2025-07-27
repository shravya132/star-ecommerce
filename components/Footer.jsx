import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-10 w-full bg-black p-8 border-t shadow-sm text-center">
      <Link href="/AdminPage" className="text-white">
        Are you the site owner?
      </Link>
    </footer>
  );
}

export default Footer;
