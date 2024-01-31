import React from "react";
import Image from "next/image";

const Heroo = () => {
  return (
    <div className="container py-77 max-w-full pl-22  bg-hero mt-3 ">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 pt-10">
        <div className="flex-col pb-40">
          <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-txt  ">
            Mines LEADERS
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-greenLeaders ">
            since 2009
          </h2>
          <button class="bg-green-600  text-white font-bold  rounded mt-10">
            Button
          </button>
        </div>
        <div>
          <Image
            src="/l3a2ila.jpg"
            alt="Vercel Logo"
            className="dark:invert "
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Heroo;
