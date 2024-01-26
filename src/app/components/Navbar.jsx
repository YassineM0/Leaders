import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-center lg:justify-between items-center gap-5 p-1  bg-white shadow-lg">
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          className="dark:invert "
          width={200}
          height={5}
          priority
        />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 pr-5">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Sponsors</a>
          <a href="">Competitions</a>
          <a href="">Projects</a>
          <a href="">Members</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
