"use client";

import {
  faCloudArrowUp,
  faGripLines,
  faLink,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LoadingBtn from "../buttons/LoadingBtn";
import { ReactSortable } from "react-sortablejs";
import toast from "react-hot-toast";
import Image from "next/image";
import { Cloudinary } from "@/actions/Cloudinary";

interface Links {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  url: string;
}
const AddPublicLinks = ({ links }: { links: []  }) => {
  const [publicLinks, SetPublicLinks] = useState<Links[]>(links || []);
  const [publicId, setPublicId] = useState();

  const addNewLink = () => {
    SetPublicLinks((prevValue) => {
      return [
        ...prevValue,
        {
          key: Date.now().toString(),
          title: "",
          subtitle: "",
          icon: "",
          url: "",
        },
      ];
    });
  };
  const removeLink = (rmKey: string) => {
    const fil = publicLinks.filter((link) => link.key !== rmKey);
    SetPublicLinks(fil);
  };
  const previewImages = (file: any, key: string) => {
    const selectedFile = file.target.files[0];

    if (selectedFile && selectedFile.type.includes("image")) {
      const reader = new FileReader();

      reader.onload = () => {
        SetPublicLinks((preValue) => {
          const newLinks = [...preValue];
          newLinks.forEach((link) => {
            if (link.key === key) {
              link.icon = reader.result;
            }
          });
          return newLinks;
        });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const onSubmit = async (fileData: any) => {
    if (!publicLinks.length) {
      console.log("con true");
      await Cloudinary("", []).then((res) => console.log(res));
    }
    const keys: any[] = [];
    publicLinks.map((el) => keys.push(el.key));
    const files = [];
    for (let i = 0; i < keys.length; i++) {
      let isData = fileData.get(keys[i]);
      files.push(isData);
    }
    const inpData = [];
    for (let i in publicLinks) {
      let title = fileData.get(`title${i}`);
      let subtitle = fileData.get(`subtitle${i}`);
      let url = fileData.get(`url${i}`);

      let icon = links ? (links.length ? links[i]?.icon : "") : "";
      console.log(links[i]?.icon);
      let key = publicLinks[i]?.key;
      if (!icon) {
        inpData.push({ key, title, subtitle, url });
      } else {
        inpData.push({ key, title, subtitle, url, icon });
      }
    }
    await Cloudinary(files, inpData).then((el) =>
      toast.success("Success!", { id: "loading" })
    );
  };

  const loading = () => {
    toast.loading("Loading...", { id: "loading" });
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
      <form action={onSubmit} onSubmit={loading}>
        <ReactSortable list={publicLinks} setList={SetPublicLinks}>
          {publicLinks.map((el, index) => (
            <div key={el.key} className="ml-3 mt-10 flex">
              <div className="flex items-center -ml-2 mr-4 mb-10">
                <FontAwesomeIcon
                  icon={faGripLines}
                  className="p-2 hover:cursor-grab"
                />
              </div>
              <div className="w-44 -ml-3">
                <div className=" w-20 h-20 ml-1 mt-0 flex justify-center items-center rounded-full overflow-hidden bg-gray-400">
                  {el.icon ? (
                    <Image
                      src={el.icon}
                      width={80}
                      height={80}
                      alt="preview image"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faLink} className="h-5" />
                  )}
                </div>
                <label className="block mt-4 -ml-7 p-1 border text-gray-600 text-center rounded border-black hover:cursor-pointer">
                  <FontAwesomeIcon icon={faCloudArrowUp} className="mr-2 w-5" />
                  <span>upload image</span>
                  <input
                    type="file"
                    onChange={(ev) => previewImages(ev, el.key)}
                    name={el.key}
                    className="hidden"
                  />
                </label>
                <div
                  onClick={() => removeLink(el.key)}
                  className="mt-1 -ml-7 p-1 border text-gray-600 text-center rounded border-black hover:cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-3 w-5" />
                  <span>Remove Link</span>
                </div>
              </div>
              <div className="mt-5 w-full ml-4">
                <input
                  type="text"
                  name={`title${index}`}
                  placeholder="title"
                  className="page-input"
                  defaultValue={el.title}
                />
                <input
                  type="text"
                  name={`subtitle${index}`}
                  placeholder="subtitle (optional)"
                  className="page-input"
                  defaultValue={el.subtitle}
                />
                <input
                  type="text"
                  name={`url${index}`}
                  placeholder="url"
                  className="page-input"
                  defaultValue={el.url}
                />
              </div>
            </div>
          ))}
        </ReactSortable>

        <div className="flex justify-center mt-10">
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
