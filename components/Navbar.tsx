import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full text-black flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          <span className="block text-xl">Set a vibe</span>
        </h1>
      </div>

      <nav>

        <ul className="flex flex-wrap items-right justify-right mb-6 text-gray-900 dark:text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Navbar;