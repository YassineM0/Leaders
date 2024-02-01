import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container max-w-full mt-2 bg-hero p-11">
      <div className="grid grid-cols-[1fr_2fr] ">
        <div className="">
          <Image
            src="/logo.jpeg"
            alt="Leaders logo"
            className="dark:invert p-1"
            width={350}
            height={5}
            priority
          />
        </div>
        <div className="">
          <h1 className="text-4xl  font-semibold text-txt">About us</h1>
          <p className="text-justify  text-base text-pp  font-medium pr-2">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
