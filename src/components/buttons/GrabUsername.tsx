"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Flash } from "@/components/sweetFlash/Flash";
import AccountFormData from "../forms/AccountFormData";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GrabUsername = ({ user }: { user: string }) => {
  let [takenUsernameError, setTakenUsernameError] = useState(false);
  let [nameError, setNameError] = useState(false);
  let [name, setName] = useState(user);
  const router = useRouter();
  const addUsername = async (formData: any) => {
    const username = await AccountFormData(formData);
    if (username === false) {
      setTakenUsernameError(true);
      Flash("error", "username is taken!");
    } else if (username === true) {
      setTakenUsernameError(false);
      Flash("success", "User Created Successfully!");
      setTimeout(() => {
        router.push(`/account/${name}`);
      }, 1000);
    } else {
      setTakenUsernameError(false);
    }
  };

  const checkNameLegth = () => {
    if (name.length > 3) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mb-4">
          Grab your username
        </h1>
        <p className="text-gray-500 text-center mb-10">Choose your username</p>
      </div>
      <div className="flex justify-center">
        <form
          action={addUsername}
          className="w-[85%] flex flex-col items-center"
        >
          <input
            onChange={(event: any) => setName(event.target.value)}
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
          {nameError ? (
            <p className="p-2 w-fit text-red-600 mt-[-13px]">
              Name must be more then 3 Charecters!
            </p>
          ) : (
            ""
          )}
          <button
            onClick={checkNameLegth}
            className="w-1/2 flex justify-center items-center gap-2 text-white bg-blue-600 border py-2 px-4 shadow-lg"
          >
            <span>Claim Your Username</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default GrabUsername;
