"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="flex gap-2 items-center border p-2 shadow-lg hover:text-black"
    >
      <span>Lagout</span>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default SignOut;
