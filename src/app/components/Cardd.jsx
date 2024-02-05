import React from "react";
import Image from "next/image";

const Cardd = () => {
  return (
    <div id="Projects" className="mt-2">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-txt pr-77 text-center pl-5">
        Projects
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] mt-2">
        <div>
          <Image
            src="/pr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg"
            width={400}
            height={100}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-1 inset-x-2 rounded-lg shadow-lg">
            <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
              Project x
            </h3>
          </div>
        </div>
        <div>
          <Image
            src="/pr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg"
            width={400}
            height={100}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-1 inset-x-7 rounded-lg shadow-lg">
            <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
              Project x
            </h3>
          </div>
        </div>
        <div>
          <Image
            src="/pr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg"
            width={400}
            height={100}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-1 inset-x-6 rounded-lg shadow-lg">
            <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
              Project x
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
