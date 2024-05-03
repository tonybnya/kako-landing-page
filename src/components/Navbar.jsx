import React from "react";
import logo from "/assets/logo/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="KaKo logo" className="w-[5%]" />
      <ul className="flex gap-2 font-righteous">
        <li className="text-red-600">
          <a
            href="https://kako-coming-soon-page.onrender.com/"
            target="_blank"
            className="no-underline"
          >
            KaKo
          </a>
        </li>
        <li>
          <a
            href="https://kako-coming-soon-page.onrender.com/"
            target="_blank"
            className="no-underline"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
