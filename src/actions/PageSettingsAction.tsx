"use server";
import { Page } from "@/models/Page";

const PageSettingsAction = async (formData: any, page: string) => {
  const userUpdateObj = {
    displayname: formData.get("displayname"),
    location: formData.get("location"),
    bio: formData.get("bio"),
  };
  const user = await Page.findOneAndUpdate(
    { uri: page },
    {
      displayname: userUpdateObj.displayname,
      location: userUpdateObj.location,
      bio: userUpdateObj.bio,
    }
  );
  const userData = await Page.findOneAndUpdate({ uri: page });
  console.log(userData);
};

export default PageSettingsAction;
