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
    const arrayBuffer = await imgFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    try {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "linkTree",
              format: "jpg",
              allowed_formats: ["jpg"],
              unique_filename: true,
            },
            function (error, result) {
              if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }
          )
          .end(buffer);
      });
      //@ts-ignore
      return { url: result?.url, public_id: result?.public_id };
    } catch (err) {
      console.log(err);
    }
  };

  if (bg_pic?.size) {
    console.log("bg_Pic.size conditon is true.");
    console.log(public_id);
    if (public_id) {
      await cloudinary.uploader
        .destroy(public_id)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
    //@ts-ignore
    const { url: bg_url, public_id: bg_public_id } = await saveToCloudinary(
      bg_pic
    ).catch((err) => console.log(err));
    returnData.push({ bg_url, bg_public_id });
  }
  if (profile_pic?.size) {
    console.log("profile_Pic.size conditon is true.");
    console.log(public_id_for_profile);
    if (public_id_for_profile) {
      await cloudinary.uploader
        .destroy(public_id_for_profile)
        .then((result) => console.log(result))
        .catch((err) => {
          console.log(err);
        });
    }
    //@ts-ignore
    const { url: profile_url, public_id: profile_public_id } =
      await saveToCloudinary(profile_pic).catch((err) => console.log(err));
    returnData.push({ profile_url, profile_public_id });
  }
  return returnData;
};

export const removeLink = async (public_id: string) => {
  if (public_id) {
    await cloudinary.uploader
      .destroy(public_id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
};
