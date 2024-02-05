import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-center lg:justify-between items-center gap-5 p-1 px-2  bg-white shadow-lg mb-4">
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          className="dark:invert "
          width={200}
          height={5}
          priority
        />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <a href="#heroo" className="font-medium text-items ">
            Home
          </a>
          <a href="#About" className="font-medium text-items">
            About us
          </a>
          <a href="#Sponsors" className="font-medium text-items">
            Sponsors
          </a>
          <a href="#Competitions" className="font-medium text-items">
            Competitions
          </a>
          <a href="#Projects" className="font-medium text-items">
            Projects
          </a>
          <a href="#Members" className="font-medium text-items">
            Members
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
