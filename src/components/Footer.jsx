import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-product absolute center bottom-5 flex gap-2 w-full">
      <h1 className="text-responsive">
        Copyright &copy; {new Date().getFullYear()}{" "}
      </h1>
      <a href="https://github.com/omrfrkcpr/iweather" target="blank">
        <FaGithubSquare size={28} className="hover:text-black hover:bg-white" />
      </a>
      <a href="https://www.linkedin.com/in/omrfrkcpr/" target="blank">
        <FaLinkedin
          size={28}
          className=" hover:text-[#0A66C2] hover:bg-white"
        />
      </a>
    </div>
  );
};

export default Footer;
