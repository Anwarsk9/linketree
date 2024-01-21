import { saveLinks } from "./PageSettingsAction";

export const Cloudinary = async (linkArr: any) => {
  const imageResLinks = [];
  for (const link of linkArr) {
    if (link) {
      const formData = new FormData();
      formData.append("file", link);
      // "use server"
      formData.append("upload_preset", `${process.env.CLOUDINARY_PRESET_NAME}`);
      try {
        const uploadResponse = await fetch(`${process.env.CLOUDINARY_API_URL}`, {
          method: "POST",
          body: formData,
        });
        const { url } = await uploadResponse.json();
        imageResLinks.push({url:url});
        await saveLinks(imageResLinks).then((res) => console.log(res));
      } catch (err) {
        console.log(err);
      }
    }
  }
  return true;
};
