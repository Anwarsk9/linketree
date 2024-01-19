"use client";

import {
  faCloudArrowUp,
  faGripLines,
  faLink,
  faPlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LoadingBtn from "../buttons/LoadingBtn";
import { ReactSortable } from "react-sortablejs";

const AddPublicLinks = ({ links }: { links: [] }) => {
  const [publicLinks, SetPublicLinks] = useState(links || []);

  const addNewLink = () => {
    const key = Date.now().toString();
    SetPublicLinks((prevValue) => {
      return [
        ...prevValue,
        {
          key: key,
          title: "",
          subtitle: "",
          icon: "",
          url: "",
        },
      ];
    });
  };

  return (
    <div className="bg-white p-2 mt-4">
      <h3 className="text-xl font-semibold">Add PublicLinks</h3>
      <div className="w-28" onClick={addNewLink}>
        <div className="flex items-center gap-2 mt-4 ml-3  hover:cursor-pointer">
          <FontAwesomeIcon
            icon={faPlus}
            className="h-3 p-1 bg-blue-600 text-white rounded-full"
          />
          <span className="text-blue-600">Add new</span>
        </div>
      </div>
      <form action="">
        <ReactSortable list={publicLinks} setList={SetPublicLinks}>
          {publicLinks.map((el) => (
            <div key={el.key} className="ml-3 mt-10 flex">
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
                <label className="block mt-4 -ml-7 p-1 border text-gray-600 text-center rounded border-black hover:cursor-pointer">
                  <FontAwesomeIcon icon={faCloudArrowUp} className="mr-2 w-5" />
                  <span>upload image</span>
                  <input
                    type="file"
                    // onChange={(ev) => handleUrlName(ev, el.key)}
                    name="url"
                    className="hidden"
                  />
                </label>
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
            </div>
          ))}
        </ReactSortable>
        <div className="flex justify-center mt-5">
          <LoadingBtn className=" text-white bg-blue-600 flex items-center justify-center gap-2 p-2 rounded w-1/4">
            <FontAwesomeIcon icon={faSave} className="w-5" />
            <span>Save</span>
          </LoadingBtn>
        </div>
      </form>
    </div>
  );
};

export default AddPublicLinks;
