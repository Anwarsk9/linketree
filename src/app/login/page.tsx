"use client"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="max-w-xs mx-auto p-4 bg-white">
        <h1 className="text-4xl text-center font-bold mb-6">Sign In</h1>
        <button
          onClick={() => signIn("google",{callbackUrl:`/account`})}
          className="flex gap-2 justify-center items-center bg-blue-700 text-white w-full py-4"
        >
          <FontAwesomeIcon icon={faGoogle} className="w-6" />{" "}
          <span>Sign In With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
