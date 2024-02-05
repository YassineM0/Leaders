import React from "react";
import Image from "next/image";

const members = () => {
  return (
    <div id="Members" className="mt-2">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-txt pr-77 text-center pl-77">
        Members
      </h1>
      <div className="flex flex-row justify-center">
        <Image
          src="/prr.jpg"
          alt="Vercel Logo"
          className="dark:invert ml-2 relative rounded-lg "
          width={300}
          height={200}
          priority
        />
        <div className="w-3 h-4 bg-card absolute inset-y-75 inset-x-7 rounded-lg shadow-lg">
          <h3 className="text-pp font-semibold text-center pt-1 text-xl ">
            Project x
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr] mt-2 p-2 pl-33">
        <div>
          <Image
            src="/prr.jpg"
            alt="Vercel Logo"
            className="dark:invert  ml-2 relative rounded-lg"
            width={300}
            height={200}
            priority
          />
          <div className="w-3 h-4 bg-card absolute inset-y-55 inset-x-222 rounded-lg shadow-lg">
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
          <div className="w-3 h-4 bg-card absolute inset-y-55 inset-x-66 rounded-lg shadow-lg">
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
