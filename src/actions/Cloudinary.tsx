import { saveLinks } from "./PageSettingsAction";

export const Cloudinary = async (linkArr: any, inpData: object[]) => {
  console.log(linkArr, inpData);
  const imageResLinks = [];
  for (const [index, file] of linkArr.entries()) {
    if (file?.size) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", `${process.env.CLOUDINARY_PRESET_NAME}`);
      try {
        const uploadResponse = await fetch(
          `${process.env.CLOUDINARY_API_URL}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const { url } = await uploadResponse.json();
        imageResLinks.push({ ...inpData[index], icon: url });
        await saveLinks(imageResLinks).then((res) => console.log(res));
      } catch (err) {
        console.log(err);
      }
    } else {
      imageResLinks.push(inpData[index]);
      await saveLinks(imageResLinks).then((res) => console.log(res));
    }
  }
  return true;
};
