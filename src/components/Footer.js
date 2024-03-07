import React from "react";
import { ImGithub, ImLinkedin2, ImMail4 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="mt-40 p-5 text-white bg-black">
      <div className="flex justify-center gap-10">
        <div>
          <a href="https://www.linkedin.com/in/mathieu-etcheverry-88184312a/" target="blank" title="LinkedIn">
            <ImLinkedin2 className="w-8 h-8"/>
          </a>
        </div>
        <div>
          <a href="https://github.com/Dexxark" target="_blank" title="GitHub">
            <ImGithub className="w-8 h-8"/>
          </a>
        </div>
        <div>
          <a href="mailto:etcheverry.mathieu@gmail.com" target="_blank" title="E-mail">
            <ImMail4 className="w-8 h-8"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;