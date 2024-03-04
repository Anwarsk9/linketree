"use client";

import { signIn } from "next-auth/react";

const HeroForm = () => {
  const formdata = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const input = form?.querySelector("input") as HTMLFormElement;
    if (input.value) {
      await signIn("google", {
        callbackUrl: `/account?username=${input.value}`,
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={formdata}
        className="inline-flex items-center shadow-lg shadow-gray-700/40"
      >
        <span className="py-4  pl-4 bg-white">linktree.to/</span>
        <input
          type="text"
          className="w-[90%] md:w-full py-4 bg-white outline-none"
          placeholder="username"
        />
        <button className="py-4 px-6 bg-blue-500 text-white">Join</button>
      </form>
    </div>
  );
};

export default HeroForm;
