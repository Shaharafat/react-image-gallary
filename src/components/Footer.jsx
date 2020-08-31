import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <span className="bg-indigo-800 mt-12 px-4 py-1 font-semibold text-white relative rounded-lg ">
      Made with <FontAwesomeIcon className="text-red-600 animate-pulse" icon={faHeart} />
      {" "}by {" "}
      <a
        href="https://github.com/shaharafat"
        target="_blank"
        className="underline"
      >Shah Arafat</a>
    </span>
  );
};

export default Footer;
