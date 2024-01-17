"use client";
import { saveSocialMediaOptionsToDB } from "@/actions/PageSettingsAction";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGripLines,
  faMobile,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LoadingBtn from "../buttons/LoadingBtn";
import toast from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";

interface SocialMediaOption {
  key: string;
  label: string;
  icon: any;
  placeholder: string;
}

const socialMediaOptions: SocialMediaOption[] = [
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
    placeholder: "whatsapp number.",
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

const AddSocialMediaLinksForm = ({
  socialMedia_Links,
}: {
  socialMedia_Links: object;
}) => {
  const buttonsToProfile = Object.keys(socialMedia_Links);
  const activeButtons = socialMediaOptions.filter((btn1) => {
    return buttonsToProfile.some((btn2) => btn2 === btn1.key);
  });
  const [activeButton, setActiveButton] =
    useState<SocialMediaOption[]>(activeButtons);

  const addButtonToProfile = (button: object) => {
    setActiveButton((prevButton: any) => {
      return [...prevButton, button];
    });
  };

  const handleAction = async (formData: any) => {
    const saveData = {};
    formData.forEach((value: string, key: string) => {
      if (value) {
        saveData[key] = value;
      }
    });
    await saveSocialMediaOptionsToDB(saveData).then((result) => {
      if (result) {
        toast.success("Saved!", { id: "loading" });
      } else {
        toast.error("Error!", { id: "loading" });
      }
    });
  };

  const handleDelete = (btn: SocialMediaOption) => {
    const addBtn = activeButton.filter((el) => el.key !== btn.key);
    setActiveButton(addBtn);
  };

  const notActiveBtns = socialMediaOptions.filter((btn1) => {
    return activeButton.every((btn2) => btn2.key !== btn1.key);
  });

  return (
    <div className="p-2 bg-white mt-4">
      <h2 className="mb-3 text-xl font-bold">Add Social Media Links:</h2>
      <form
        action={handleAction}
        onSubmit={() => toast.loading("loading...", { id: "loading" })}
      >
        <ReactSortable list={activeButton} setList={setActiveButton}>
          {activeButton
            ? activeButton.map((b) => (
                <div className="flex mb-4">
                  <div className="flex  items-center gap-2 bg-gray-400 w-36">
                    <FontAwesomeIcon
                      icon={faGripLines}
                      className="h-4 p-2 pr-0 hover:cursor-grab"
                    />
                    <FontAwesomeIcon icon={b.icon} className="h-5" />
                    <span>{b.label}</span>
                  </div>
                  <input
                    type="text"
                    name={b.key}
                    placeholder={b.placeholder}
                    defaultValue={socialMedia_Links[b.key]}
                    className="bg-gray-300 grow p-2 outline-blue-400"
                  />
                  <label
                    onClick={() => handleDelete(b)}
                    className="p-4 bg-gray-400 hover:cursor-grab"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </label>
                </div>
              ))
            : ""}
        </ReactSortable>
        <div className="flex flex-wrap">
          {notActiveBtns.map((mediaOption) => (
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
        <div className="flex justify-center mt-5">
          <LoadingBtn className=" text-white bg-blue-600 flex items-center justify-center gap-2 p-2 rounded w-1/4">
            <FontAwesomeIcon icon={faSave} className="w-5" />
            <span>Save</span>
          </LoadingBtn>
        </div>
      </form>
    </div>
  );
};

export default AddSocialMediaLinksForm;
