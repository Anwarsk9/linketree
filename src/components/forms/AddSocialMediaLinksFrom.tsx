"use client";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const socialMediaOptions = [
  {
    key: "email",
    label: "E-mail",
    icon: faEnvelope,
    placeholder: "example@email.com",
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: faMobile,
    placeholder: "+91 1231231231",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: faInstagram,
    placeholder: "https://instagram.com/account...",
  },
  {
    key: "github",
    label: "Github",
    icon: faGithub,
    placeholder: "https://github.com/account...",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: faFacebook,
    placeholder: "https://facebook.com/account...",
  },
  {
    key: "discord",
    label: "Discord",
    icon: faDiscord,
    placeholder: "https://discord.com/account...",
  },
  {
    key: "whatsapp",
    label: "Whatsapp",
    icon: faWhatsapp,
    placeholder: "https://whatsapp.com/account...",
  },
  {
    key: "tiktok",
    label: "Tiktok",
    icon: faTiktok,
    placeholder: "https://tiktok.com/account...",
  },
  {
    key: "telegram",
    label: "Telegram",
    icon: faTelegram,
    placeholder: "https://telegram.com/account...",
  },
];

const AddSocialMediaLinksFrom = () => {
  const [activeButton, setActiveButton] = useState([]);

  const addButtonToProfile = (button: object) => {
    setActiveButton((prevButton) => {
      return [...prevButton, button];
    });
  };

  const notActiveSocialMediaBtn = socialMediaOptions.filter((option) => {
    return !activeButton.find(
      (activeOption) => option.key === activeOption.key
    );
  });

  return (
    <div className="p-2 bg-white mt-4">
      <h2 className="mb-3 text-xl font-bold">Add Social Media Links:</h2>
      <form action="#">
        {activeButton
          ? activeButton.map((b) => (
              <div className="flex mb-4">
                <div className="flex  items-center gap-2 bg-gray-400 p-2 pr-0 w-28" >
                    <FontAwesomeIcon icon={b.icon} />
                    <span>{b.label}</span>
                </div>
                <input type="text" placeholder={b.placeholder}
                className="bg-gray-300 grow p-2 outline-blue-400" />
              </div>
            ))
          : ""}
        <div className="flex flex-wrap">
          {notActiveSocialMediaBtn.map((mediaOption) => (
            <div className="p-1">
              <button
                onClick={() => addButtonToProfile(mediaOption)}
                type="button"
                className="p-2 gap-2 rounded flex items-center justify-center bg-gray-300"
              >
                <FontAwesomeIcon icon={mediaOption.icon} />
                <span>{mediaOption.label}</span>
                <strong>+</strong>
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddSocialMediaLinksFrom;
