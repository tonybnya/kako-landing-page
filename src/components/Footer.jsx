import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between font-opensans max-sm:flex-col max-sm:gap-2 max-sm:items-center">
      <p>&copy; 2024 - All Rights Reserved.</p>
      <div className="flex flex-row gap-4 items-center text-white">
        <p>
          Follow <span className="text-red-600 font-opensansbold">KaKo</span>
        </p>
        <ul className="flex flew-row gap-2">
          <li className="hover:scale-110">
            <a
              href="https://web.facebook.com/tonybnya"
              target="_blank"
              className="no-underline"
            >
              <i className="fa-brands fa-facebook-f hover:text-red-600"></i>
            </a>
          </li>
          <li className="hover:scale-110">
            <a
              href="https://www.instagram.com/tonybnya"
              target="_blank"
              className="no-underline"
            >
              <i className="fa-brands fa-instagram hover:text-red-600"></i>
            </a>
          </li>
          <li className="hover:scale-110">
            <a
              target="_blank"
              href="https://twitter.com/tonybnya"
              className="no-underline"
            >
              <i className="fa-brands fa-x-twitter hover:text-red-600"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
