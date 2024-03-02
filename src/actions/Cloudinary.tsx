import { saveLinks } from "./PageSettingsAction";
import { removeLink } from "./ImgUploadToCloudinary";
export const Cloudinary = async (linkArr: any, inpData: {icon:string}[]) => {
  const imageResLinks = [];
  if (linkArr.length) {
    for (const [index, file] of linkArr.entries()) {
      if (file?.size) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          `${process.env.CLOUDINARY_PRESET_NAME}`
        );
        try {
          const uploadResponse = await fetch(
            `${process.env.CLOUDINARY_API_URL}/upload`,
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
        try {
          if (inpData[index].icon) {
            const publicId1 = inpData[index]?.icon.split("/")[8].split(".")[0];
            const publicId2 = `linktree/${publicId1}`;
            console.log(publicId2);
            //delete req
            await removeLink(publicId2).then((res) => console.log(res));
          }
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      } else {
        imageResLinks.push(inpData[index]);
        await saveLinks(imageResLinks).then((res) => console.log(res));
      }
    }
    return imageResLinks;
  } else if (!linkArr && !inpData.length) {
    console.log("Cond True");
    await saveLinks([]).then((res) => console.log(res));
    return true;
  }
};
