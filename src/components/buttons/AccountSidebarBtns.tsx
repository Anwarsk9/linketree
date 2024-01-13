"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRightFromBracket,
  faChartPie,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const AccountSignoutBtns = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        href={"/account"}
        className={
          "flex items-center gap-2 opacity-80 hover:opacity-100 " +
          (pathname === "/account" ? "text-blue-400 !opacity-100" : "")
        }
      >
        <FontAwesomeIcon icon={faFileLines} className="w-4 h-5" />
        <span>My Page</span>
      </Link>
      <Link
        href={"/analytics"}
        className={
          "flex items-center gap-2 opacity-80 hover:opacity-100 " +
          (pathname === "/analytics" ? "text-blue-400 !opacity-100" : "")
        }
      >
        <FontAwesomeIcon icon={faChartPie} className="w-5" />
        <span>Analytics</span>
      </Link>
      <button
        onClick={() => signOut()}
        className="flex items-center justify-start gap-2 opacity-80 hover:opacity-100 "
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="w-5 ml-[-10px]"
        />
        <span>Logout</span>
      </button>
      <Link
        href={"/"}
        className="flex items-center gap-2 mt-4 text-gray-500 hover:text-gray-700"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-5" />
        <span>Go back to Home</span>
      </Link>
    </div>
  );
};

export default AccountSignoutBtns;
