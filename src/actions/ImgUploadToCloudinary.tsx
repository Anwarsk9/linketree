"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ImgUploadToCloudinary = async (
  formData: any,
  public_id?: string,
  public_id_for_profile?: string
) => {
  const bg_pic = await formData.get("image");
  const profile_pic = await formData.get("profile_pic");
  const linkeImage = await formData.get("linkImage");
  console.log(linkeImage);
  const returnData = [];

  const saveToCloudinary = async (imgFile: any) => {
    const arrayBuffer = await imgFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
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
    return { url: result?.url, public_id: result?.public_id };
  };

  if (bg_pic?.size) {
    console.log("bg_Pic.size conditon is true.");
    console.log(public_id);
    if (public_id) {
      await cloudinary.uploader
        .destroy(public_id)
        .then((result) => console.log(result));
    }
    const { url: bg_url, public_id: bg_public_id } = await saveToCloudinary(
      bg_pic
    );
    returnData.push({ bg_url, bg_public_id });
  }
  if (profile_pic?.size) {
    console.log("profile_Pic.size conditon is true.");
    console.log(public_id_for_profile);
    if (public_id_for_profile) {
      await cloudinary.uploader
        .destroy(public_id_for_profile)
        .then((result) => console.log(result));
    }
    const { url: profile_url, public_id: profile_public_id } =
      await saveToCloudinary(profile_pic);
    returnData.push({ profile_url, profile_public_id });
  }
  // if (linkeImage.size) {
  //   const { url, public_id } = await saveToCloudinary(linkeImage);
  //   returnData.push({ url, public_id });
  // }
  return returnData;
};

export default ImgUploadToCloudinary;
