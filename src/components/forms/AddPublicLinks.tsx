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
import toast from "react-hot-toast";
import { Cloudinary } from "@/actions/Cloudinary";
import { saveLinks } from "@/actions/PageSettingsAction";

const AddPublicLinks = ({ links }: { links: [] }) => {
  console.log(links);
  const [publicLinks, SetPublicLinks] = useState([]);

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

  const onSubmit = async (fileData) => {
    const keys = [];
    publicLinks.map((el) => keys.push(el.key));
    const arr = [];
    for (let i = 0; i < keys.length; i++) {
      let isData = fileData.get(keys[i]);
      arr.push(isData);
    }
    console.log(arr);
    await Cloudinary(arr).then(() => toast.success("Success!"));
    // const imageResLinks = [];
    // for (const link of arr) {
    //   if (link) {
    //     const formData = new FormData();
    //     formData.append("file", link);
    //     //   // "use server"
    //     formData.append("upload_preset", "c1lpxbnc");
    //     try {
    //       const uploadResponse = await fetch(
    //         "https://api.cloudinary.com/v1_1/dhbj7pdvm/image/upload",
    //         {
    //           method: "POST",
    //           body: formData,
    //         }
    //       );
    //       const { url } = await uploadResponse.json();
    //       imageResLinks.push(url);
    //       await saveLinks(imageResLinks).then((res) => console.log(res));
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // }

    // for(
    // await ImgUploadToCloudinary(formData).then(async (res) => {
    //   console.log(publicLinks);
    //   await saveLinks(res, publicLinks).then((res) =>
    //     res ? toast.success("Links Saved!") : toast.error("error!")
    //   );
    // });
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
      <form action={onSubmit}>
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
                <div className=" w-20 h-20 ml-1 mt-3 flex justify-center items-center rounded-full overflow-hidden bg-gray-400">
                  {el.icon ? (
                    <img
                      src={el.icon}
                      alt="preview image"
                      className="w-full h-full"
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
              </div>
              <div className="w-full ml-2">
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="page-input"
                />
                <input
                  type="text"
                  name="subtitle"
                  placeholder="subtitle (optional)"
                  className="page-input"
                />
                <input
                  type="text"
                  name="url"
                  placeholder="url"
                  className="page-input"
                />
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
