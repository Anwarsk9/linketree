"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const imgUploadToCloudinary = async (
  formData: any,
  public_id?: string,
  public_id_for_profile?: string
) => {
  const bg_pic = await formData.get("image");
  const profile_pic = await formData.get("profile_pic");
  const returnData = [];

  const saveToCloudinary = async (imgFile: any) => {
    try {
      const formData = new FormData();
      formData.append("file", imgFile);
      formData.append("upload_preset", `${process.env.CLOUDINARY_PRESET_NAME}`);
      const uploadResponse = await fetch(
        `${process.env.CLOUDINARY_API_URL}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await uploadResponse.json();
      //@ts-ignore
      return { url: result?.url, public_id: result?.public_id };
    } catch (err) {
      console.log(err);
    }
  };

  // if (bg_pic?.size) {
  //   console.log("bg_Pic.size conditon is true.");
  //   console.log(public_id);
  //   try {
  //     if (public_id) {
  //       await cloudinary.uploader.destroy(public_id);
  //     }
  //     //@ts-ignore
  //     const { url: bg_url, public_id: bg_public_id } = await saveToCloudinary(
  //       bg_pic
  //     ).catch((err) => console.log(err));
  //     returnData.push({ bg_url, bg_public_id });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // if (profile_pic?.size) {
  //   if (public_id_for_profile) {
  //     try {
  //       await cloudinary.uploader.destroy(public_id_for_profile);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  try {
    //@ts-ignore
    const { url: profile_url, public_id: profile_public_id } =
      await saveToCloudinary(profile_pic).catch((err) => console.log(err));
    returnData.push({ profile_url, profile_public_id });
    return returnData;
  } catch (err) {
    console.log(err);
  }
};
// };

export const removeLink = async (public_id: string) => {
  if (public_id) {
    try {
      await cloudinary.uploader.destroy(public_id);
    } catch (err) {
      console.log(err);
    }
  }
};
