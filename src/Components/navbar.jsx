import React from "react";
import { FaLinkedin, FaGithub, FaKaggle, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl ml-3 font-bold text-blue-500">Portfolio</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl text-blue-500">
        <a
          href="https://github.com/SudhakaranGT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sudhakaran-gt/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.kaggle.com/sudhakarangt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300"
        >
          <FaKaggle />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
