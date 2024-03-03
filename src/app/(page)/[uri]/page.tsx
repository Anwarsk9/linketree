import { Page } from "@/models/Page";
import { Event } from "@/models/Event";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notFound } from "next/navigation";
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

const socialMediaOptions = {
  email: faEnvelope,
  mobile: faPhone,
  linkedin: faLinkedin,
  facebook: faFacebook,
  instagram: faInstagram,
  github: faGithub,
  tiktok: faTiktok,
  whatsapp: faWhatsapp,
  telegram: faTelegram,
};

interface Page {
  uri: string;
  owner: string;
  displayname: string;
  location: string;
  bio: string;
  bgType: string;
  bgColor: string;
  bg_image: {
    url: string;
  };
  profile_image: {
    url: string;
  };
  socialMedia_Links: object;
  links: [
    {
      key: string;
      title: string;
      subtitle: string;
      url: string;
      icon: string;
    }
  ];
}

const URI = async ({ params }: { params: { uri: string } }) => {
  const { uri } = params;
  const page: Page | null = await Page.findOne({ uri })
    .populate("bg_image")
    .populate("profile_image")
    .lean();
  const buttonLink = (btnkey: string, value: string) => {
    if (btnkey === "mobile") {
      return "tel: " + value;
    } else if (btnkey === "email") {
      return "mailto: " + value;
    } else {
      return value;
    }
  };
  //@ts-ignore
  const { user } = await getServerSession(authOptions);
  await Event.create({ type: "view", uri });
  return page ? (
    <div className="bg-blue-950 text-white h-screen">
      <div
        className="w-full h-52  bg-cover bg-center"
        style={
          page.bgType === "color"
            ? { backgroundColor: page.bgColor }
            : {
                backgroundImage: `url(
            ${page.bg_image.url}
            )`,
              }
        }
      ></div>
      <div className="flex justify-center -mt-16 md:-mt-20">
        <div className="border-4 border-white rounded-full overflow-hidden">
          <Image
            src={page.profile_image.url ? page.profile_image.url : user.image}
            width={150}
            height={150}
            alt="profile picture"
            className="h-28 w-28 md:h-32 md:w-32"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-3">
        <h1 className="text-2xl">
          {page.displayname
            ? page.displayname
            : "please create a display name to show!"}
        </h1>
        <div className="flex gap-2 mt-2 text-white/50">
          <FontAwesomeIcon icon={faLocationDot} height="20" />
          <h3>{page.location}</h3>
        </div>
        <h3 className="text-lg mt-3">{page.bio}</h3>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {page.socialMedia_Links
          ? Object.keys(page.socialMedia_Links).map((btnkey, idx) => (
              <Link
                //@ts-ignore
                href={buttonLink(btnkey, page.socialMedia_Links[btnkey])}
                className="uri-icons"
                key={idx}
              >
                <FontAwesomeIcon
                  //@ts-ignore
                  icon={socialMediaOptions[btnkey]}
                  className="w-5"
                />
              </Link>
            ))
          : ""}
      </div>
      <div className="max-w-4xl p-2 mt-6 pr-4 flex flex-wrap gap-10 m-auto">
        {page.links.map((link) => (
          <Link
            ping={"/api/click?url=" + btoa(link.url)}
            href={link.url}
            target="_blank"
            key={link.key}
            rel="noopener noreferrer"
            className="md:w-[44%] w-[60%] m-auto h-24 flex gap-1 md:m-5 md:mr-0 mb-0 rounded bg-blue-700 shadow-2xl"
          >
            <div className="relative right-3 top-3">
              {link.icon ? (
                <Image
                  src={link.icon}
                  alt="links icon"
                  height={70}
                  width={70}
                  className="rounded shadow-2xl"
                />
              ) : (
                <div className="flex justify-center bg-blue-600 h-[70px] w-[70px] rounded shadow-2xl">
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
  ) : (
    notFound()
  );
};

export default URI;
