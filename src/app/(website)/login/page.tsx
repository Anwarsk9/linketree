"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="max-w-xs mx-auto p-4">
        <h1 className="text-4xl text-center font-bold mb-6">Sign In</h1>
        <p className="text-gray-500 text-sm mb-6">
          Signin to your account using one of the following methods below.
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: `/account` })}
          className="flex gap-2 justify-center items-center bg-white text-black w-full py-4"
        >
          <FontAwesomeIcon icon={faGoogle} className="w-6 h-6" />{" "}
          <span>Sign In With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
