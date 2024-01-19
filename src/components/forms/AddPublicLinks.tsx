"use client";

import {
  faCloudArrowUp,
  faGripLines,
  faLink,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const addNewLinkForm = () => {
  console.log("ok");
};

const AddPublicLinks = () => {
  return (
    <div className="bg-white p-2 mt-4">
      <h3 className="text-xl font-semibold">Add PublicLinks</h3>
      <div className="w-28" onClick={addNewLinkForm}>
        <div className="flex items-center gap-2 mt-4 ml-3  hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faPlus}
            className="h-3 p-1 bg-blue-400 text-white rounded-full"
          />
          <span className="text-blue-400">Add new</span>
        </div>
      </div>
      <form className="ml-3 flex">
        <div className="flex items-center -ml-2 mr-4 mb-10">
          <FontAwesomeIcon
            icon={faGripLines}
            className="p-2 hover:cursor-grab"
          />
        </div>
        <div className="w-44 -ml-3">
          <div className=" w-14 h-14 ml-4 mt-3 flex justify-center items-center rounded-full bg-gray-400">
            <FontAwesomeIcon icon={faLink} className="h-5" />
          </div>
          <div className="mt-4 -ml-2 p-1 border text-gray-600 text-center rounded border-black">
            <FontAwesomeIcon icon={faCloudArrowUp} className="mr-2 w-5" />
            <span className="">upload icon</span>
          </div>
        </div>
        <div className="w-full ml-2">
          <input type="text" placeholder="title" className="page-input" />
          <input
            type="text"
            placeholder="subtitle (optional)"
            className="page-input"
          />
          <input type="text" placeholder="url" className="page-input" />
        </div>
      </form>
    </div>
  );
};

export default AddPublicLinks;
