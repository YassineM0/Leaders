import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="mb-3">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-txt pr-77 text-center pl-77">
        Contact us
      </h1>
      <div className="flex flex-row pl-88 text-xl">
        <h3 className="text-mail pr-3 text-2xl font-semibold">Email</h3>
        <p className="text-mail pt-1 font-medium">mines-leaders@mines.com</p>
      </div>
      <div className="flex flex-row pl-88 text-xl">
        <h3 className="text-mail pr-3 text-2xl font-semibold">Phone</h3>
        <p className="mb-33 text-mail pt-1 font-medium">
          xxx-xxx-xxx-xxx-xxx-xxx
        </p>
      </div>
    </div>
  );
};

export default Contact;
