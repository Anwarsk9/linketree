import { Page } from "@/models/Page";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLink,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const URI = async ({ params }: { params: object }) => {
  const { uri } = params;
  const page = await Page.findOne({ uri })
    .populate("bg_image")
    .populate("profile_image")
    .lean();
  return (
    <div className="bg-blue-950 text-white h-screen">
      <div
        className="w-full h-52  bg-cover bg-center"
        style={
          page.bgType === "color"
            ? { backgroundColor: page.bg_color }
            : {
                backgroundImage: `url(
            ${page.bg_image.url}
            )`,
              }
        }
      ></div>
      <div className="flex justify-center -mt-20">
        <div className="rounded-full overflow-hidden">
          <Image
            src={page.profile_image.url}
            width={150}
            height={150}
            alt="profile picture"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-3">
        <h1 className="text-2xl">{page.displayname}</h1>
        <div className="flex gap-2 mt-2 text-white/50">
          <FontAwesomeIcon icon={faLocationDot} height="20" />
          <h3>{page.location}</h3>
        </div>
        <h3 className="text-lg mt-3">{page.bio}</h3>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        <div className="uri-icons">
          <FontAwesomeIcon icon={faPhone} className="w-5" />
        </div>
        <div className="uri-icons">
          <FontAwesomeIcon icon={faFacebook} className="w-5" />
        </div>
        <div className="uri-icons">
          <FontAwesomeIcon icon={faEnvelope} className="w-5" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-2xl flex flex-wrap gap-10 p-5n">
          {page.links.map((link) => (
            <Link
              href={link.url}
              className="w-[44%] h-24 flex gap-1 m-5 mr-0 mb-0 rounded bg-blue-700"
            >
              <div className="relative right-3 top-3">
                {link.icon ? (
                  <Image
                    src={link.icon}
                    alt="links icon"
                    height={70}
                    width={70}
                    className="rounded"
                  />
                ) : (
                  <div className="flex justify-center bg-blue-600 h-[70px] w-[70px] rounded">
                    <FontAwesomeIcon icon={faLink} className="w-8" />
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-3">
                <span>{link.title}</span>
                <span className="text-white/60 mt-2">{link.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default URI;
