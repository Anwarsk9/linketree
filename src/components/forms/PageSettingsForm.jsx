"use client";

import { faImage, faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { saveBaseFormChangesToDB } from "@/actions/PageSettingsAction";
import LoadingBtn from "../buttons/LoadingBtn";
import toast, { Toaster } from "react-hot-toast";
import RadioTogglers from "../buttons/RadioTogglers";
import { useState } from "react";
import { imgUploadToCloudinary } from "@/actions/ImgUploadToCloudinary";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons/faCloudArrowUp";

const PageSettingsForm = ({ page }) => {
  const [bgType, setBgType] = useState(page?.bgType);
  const [bgColor, setBgColor] = useState(page?.bgColor);
  const [bgImgName, setBgImgName] = useState("");
  const [profileImgName, setProfileImgName] = useState("");
  const [proPreview, setProPreview] = useState("");
  const [bgPreview, setBgPreview] = useState("");
  const [bgImg, setBgImg] = useState({
    url: page?.bg_image.url,
    public_id: page.bg_image.public_id,
  });
  const [profileImg, setProfileImg] = useState({
    url: page?.profile_image.url,
    public_id: page.profile_image.public_id,
  });
  const saveBaseSettings = async (formData) => {
    // to check ,if user uploaded file then only save the file.
    if (bgImgName || profileImgName) {
      await imgUploadToCloudinary(
        formData,
        bgImg.public_id,
        profileImg.public_id
      ).then(async (imgUrl) => {
        imgUrl.map((url) => {
          if (url.bg_url) {
            setBgImg({
              url: url?.bg_url,
              public_id: url.bg_public_id,
            });
          } else if (url.profile_url) {
            setProfileImg({
              url: url?.profile_url,
              public_id: url.profile_public_id,
            });
          }
        });
        await saveBaseFormChangesToDB(formData, imgUrl).then((result) => {
          if (result) {
            toast.success("Success!", { id: "loading" });
            setBgImgName("");
            setProfileImgName("");
            setProPreview("");
            setBgPreview("");
          }
        });
      });
    } else {
      await saveBaseFormChangesToDB(formData).then((result) => {
        if (result) {
          toast.success("Success!", { id: "loading" });
        }
      });
    }
  };

  const handleImgName = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setBgPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
    if (event.target.files) {
      setBgImgName(event.target.files[0].name);
    }
  };
  const handleProfileImgName = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setProPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }

    if (event.target.files.length) {
      let name = event.target.files[0].name;
      setProfileImgName(name.slice(0, 10) + "...");
    }
  };
  const loading = () => {
    toast.loading("Loading...", { id: "loading" });
  };
  return (
    <>
      <form
        action={saveBaseSettings}
        onSubmit={loading}
        className="flex flex-col bg-white w-full"
      >
        <div
          className={
            "h-[300px] flex flex-col justify-center items-center bg-cover bg-center"
          }
          style={
            bgType === "color"
              ? { backgroundColor: bgColor }
              : { backgroundImage: `url(${bgPreview ? bgPreview : bgImg.url})` }
          }
        >
          <RadioTogglers
            defaultChecked={bgType}
            onChange={(val) => setBgType(val)}
            options={[
              { value: "color", icon: faPalette, label: "Color" },
              { value: "image", icon: faImage, label: "Image" },
            ]}
          />
          <div className="mt-3 p-2 rounded bg-gray-200 text-gray-600">
            {bgType === "color" ? (
              <label className="flex justify-center gap-2 hover:cursor-pointer hover:text-gray-700">
                <span>Background Color: </span>
                <input
                  type="color"
                  name="bgColor"
                  defaultValue={bgColor}
                  onChange={(event) => setBgColor(event?.target?.value)}
                />
              </label>
            ) : (
              <label className="flex justify-center hover:cursor-pointer hover:text-black ">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCloudArrowUp} className="w-5" />{" "}
                  {bgImgName ? bgImgName : "Change Image"}
                </span>
                <input
                  type="file"
                  name="image"
                  className="hidden"
                  onChange={handleImgName}
                />
              </label>
            )}
          </div>
        </div>
        <div>
          <div className="flex justify-center h-24">
            <div className="relative -top-16 w-[150px] h-[150px] ">
              <div
                className="overflow-hidden h-full rounded-full border-4
               border-white shadow shadow-black/50"
              >
                <Image
                  src={
                    profileImg.url
                      ? proPreview
                        ? proPreview
                        : profileImg.url
                      : proPreview
                      ? proPreview
                      : "https://imgs.search.brave.com/mDdtZ12xiGTjupVmFywXaqmw7taeD-L12YCXsD02hPQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzQzLzQ1/LzM2MF9GXzEwNzQz/NDUxMV9pYXJGMno4/OGM2RHM2QWxndHdv/dEhTQWt0V0NkWU9u/Ny5qcGc"
                  }
                  width={150}
                  height={150}
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center items-center">
                <label
                  className="flex justify-end relative rounded-full ml-24 -mt-12 shadow shadow-black/50  bg-white hover:cursor-pointer"
                >
                  <span className="flex justify-center items-center w-max gap-1 bg-white p-2 rounded-full">
                    <FontAwesomeIcon icon={faCloudArrowUp} className="h-6" />
                    <span>{profileImgName}</span>
                  </span>
                  <input
                    type="file"
                    onChange={handleProfileImgName}
                    name="profile_pic"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="username">DISPLAY NAME</label>
            <input
              type="text"
              placeholder="username"
              className="page-input"
              name="displayname"
              id="username"
              defaultValue={page?.displayname}
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
          <div className="flex justify-center my-5">
            <LoadingBtn className=" text-white bg-blue-600 flex items-center justify-center gap-2 p-2 rounded w-1/4">
              <FontAwesomeIcon icon={faSave} className="w-5" />
              <span>Save</span>
            </LoadingBtn>
            <Toaster />
          </div>
        </div>
      </form>
    </>
  );
};

export default PageSettingsForm;
