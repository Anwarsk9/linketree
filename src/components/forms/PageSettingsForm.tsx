"use client";

import {
  faFloppyDisk,
  faImage,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import PageSettingsAction from "@/actions/PageSettingsAction";

const PageSettingsForm = ({
  page,
  session,
}: {
  page: object;
  session: { user: { image: string } };
}) => {
  const saveBaseSettings = (formData: any) => {
    let data = PageSettingsAction(formData, page?.uri);
  };

  return (
    <>
      <form action={saveBaseSettings} className="flex flex-col bg-white w-full">
        <div className="radio-togglers h-36 flex  justify-center items-center bg-gray-300">
          <div className="p-2 py-3 bg-gray-200">
            <label>
              <input type="radio" name="imgOrColor" />
              <span>
                <FontAwesomeIcon icon={faPalette} className="w-4" />
                <span>Color</span>
              </span>
            </label>
            <label>
              <input type="radio" name="imgOrColor" />
              <span>
                <FontAwesomeIcon icon={faImage} className="w-4" />
                <span>Image</span>
              </span>
            </label>
          </div>
        </div>
        <div>
          <div className="flex justify-center -mt-8 h-32">
            <div>
              <Image
                src={session?.user?.image}
                width={"80"}
                height={"80"}
                alt="Profile Image"
                className="rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <label htmlFor="username">DISPLAY NAME</label>
            <input
              type="text"
              placeholder="username"
              className="page-input"
              name="displayname"
              id="username"
              defaultValue={page?.uri}
            />
            <label htmlFor="location">location</label>
            <input
              type="text"
              placeholder="Somewhere in the world"
              className="page-input"
              id="location"
              name="location"
              defaultValue={page?.location}
            />
            <label htmlFor="bio">bio</label>
            <textarea
              placeholder="your bio goes here"
              className="page-input"
              id="bio"
              name="bio"
              defaultValue={page?.bio}
            />
          </div>
          <div className="w-full flex justify-center items-center my-5">
            <button className="flex items-center gap-2 p-2 rounded bg-blue-500 text-white">
              <FontAwesomeIcon icon={faFloppyDisk} className="w-4 h-5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PageSettingsForm;
