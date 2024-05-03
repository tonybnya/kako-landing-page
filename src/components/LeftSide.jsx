import React from "react";
import batman from "/assets/img/batman.png";

const LeftSide = () => {
  return (
    <div className="xl:bg-slate-900 xl:h-screen xl:flex xl:items-center xl:justify-center xl:block md:hidden max-sm:hidden">
      <img src={batman} alt="Batman image" />
    </div>
  );
};

export default LeftSide;
