import React from "react";
import Image from "next/image";

import { Card } from "flowbite-react";

const Cardd = ({ description, title, image }) => {
  return (
    <Card href="#" className="max-w-sm flex flex-col items-center px-3">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center ">
        {title}
      </h5>
      <Image
        src={image || "/wd.png"}
        alt="Leaders logo"
        className="dark:invert"
        width={200}
        height={5}
        priority
      />
      <p className="font-normal text-gray-700 dark:text-gray-400  text-justify ">
        {description}
      </p>
    </Card>
  );
};

export default Cardd;
