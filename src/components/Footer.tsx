// Footer.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <p className="text-base font-bold">Linktree</p>
          <p className="text-xs">&copy; 2024 All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
