import React from "react";
import Image from "next/image";

const members = () => {
  return (
    <div className="mt-2">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-txt pr-77 text-center pl-577">
        Members
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr] mt-2 p-2">
        <div>
          <Image
            src="/prr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg"
            width={300}
            height={200}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-55 inset-x-2 rounded-lg shadow-lg">
            <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
              Project x
            </h3>
          </div>
        </div>
        <div>
          <Image
            src="/prr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg"
            width={300}
            height={200}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-55 inset-x-7 rounded-lg shadow-lg">
            <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
              Project x
            </h3>
          </div>
        </div>
        <div>
          <Image
            src="/prr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg "
            width={300}
            height={200}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-55 inset-x-6 rounded-lg shadow-lg">
            <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
              Project x
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default members;
