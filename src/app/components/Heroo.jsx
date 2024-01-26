import React from "react";
import Image from "next/image";

const Heroo = () => {
  return (
    <div className="container py-32 max-w-full pl-32 mt bg-gray-50 mt-3">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 pt-10">
        <div className="flex-col pb-40">
          <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-600 ">
            Mines LEADERS <br />
          </h1>
          <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-green-600 mt-3">
            since 2009
          </h2>
          <button class="bg-green-600  text-white font-bold px-7 py-2 rounded mt-10">
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
