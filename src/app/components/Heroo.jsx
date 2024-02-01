import React from "react";
import Image from "next/image";

const Heroo = () => {
  return (
    <div className="container max-w-full  bg-hero mt-3 ">
      <div className="grid grid-cols-[1fr_1fr] pb-3">
        <div className="flex-col pb-40 pl-22  pt-22">
          <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-txt pr-77 ">
            Mines LEADERS
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-greenLeaders ">
            since 2009
          </h2>
          <button class="bg-greenLeaders  text-white font-bold  rounded-lg mt-1 px-11 py-4">
            Button
          </button>
        </div>
        <div className="grid grid-cols-[1fr_1fr] ">
          <Image
            src="/tst2.png"
            alt="Vercel Logo"
            className="dark:invert  "
            width={500}
            height={700}
            priority
          />
          <Image
            src="/tst3.png"
            alt="Vercel Logo"
            className="dark:invert h-auto "
            width={500}
            height={700}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Heroo;
