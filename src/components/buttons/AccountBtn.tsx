"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Flash } from "@/components/sweetFlash/Flash";
import AccountFormData from "../forms/AccountFormData";
import { useState } from "react";

const AccountBtn = ({ user }: { user: string }) => {
  let [takenUsernameError, setTakenUsernameError] = useState(false);

  const addUsername = async (formData: any) => {
    const username = await AccountFormData(formData);
    if (!username) {
      setTakenUsernameError(true);
      Flash("error", "username is taken!");
    } else {
      setTakenUsernameError(false);
      Flash("success", "User Created Successfully!");
    }
  };

  return (
    <div className="flex justify-center">
      <form action={addUsername} className="w-[85%] flex flex-col items-center">
        <input
          name="username"
          className="w-1/2 p-2 mb-2 text-center outline-blue-500 shadow-lg"
          type="text"
          defaultValue={user}
          placeholder="username"
        />
        {takenUsernameError ? (
          <p className="p-2 w-1/2 text-red-600 mt-[-13px]">
            Username Is Taken!
          </p>
        ) : (
          ""
        )}
        <button className="w-1/2 flex justify-center items-center gap-2 text-white bg-blue-600 border py-2 px-4 shadow-lg">
          <span>Claim Your Username</span>
          <FontAwesomeIcon icon={faArrowRight} className="w-5" />
        </button>
      </form>
    </div>
  );
};

export default AccountBtn;