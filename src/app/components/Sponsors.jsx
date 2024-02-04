import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="container max-w-full mt-2">
      <div className="flex flex-col">
        <div>
          <h1 className="text-5xl flex justify-center text-txt font-semibold">
            {" "}
            Our sponsors
          </h1>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] pl-22 pt-2 ">
          <div>
            <Image
              src="/logo.png"
              alt="Leaders logo"
              className="dark:invert pt-1"
              width={200}
              height={5}
              priority
            />
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="Leaders logo"
              className="dark:invert p-1"
              width={200}
              height={5}
              priority
            />
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="Leaders logo"
              className="dark:invert p-1"
              width={200}
              height={5}
              priority
            />
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="Leaders logo"
              className="dark:invert p-1"
              width={200}
              height={5}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
