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
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Linktree</p>
          <p className="text-sm">&copy; 2024 All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-red-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
