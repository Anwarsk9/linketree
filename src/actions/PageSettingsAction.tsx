"use server";
import { authOptions } from "@/libs/auth";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";

interface Images {
  bg_url: string;
  bg_public_id: string;
  profile_url: string;
  profile_public_id: string;
}

export const saveBaseFormChangesToDB = async (
  formData?: any,
  images?: Images[]
) => {
  if (formData) {
    let displayname = formData.get("displayname");
    let location = formData.get("location");
    let bio = formData.get("bio");
    let bgType = formData.get("bgType");
    let bgColor = formData.get("bgColor");
    try {
      const session = await getServerSession(authOptions);
      if (session) {
        await Page.findOneAndUpdate(
          { owner: session?.user?.email },
          {
            displayname,
            location,
            bio,
            bgType,
          }
        );
        if (bgColor) {
          await Page.findOneAndUpdate(
            { owner: session?.user?.email },
            { bgColor }
          );
        }

        if (images && images?.length > 0) {
          images.map(async (image) => {
            if (image.bg_url) {
              await Page.findOneAndUpdate(
                { owner: session?.user?.email },
                {
                  $set: {
                    bg_image: {
                      url: image?.bg_url,
                      public_id: image?.bg_public_id,
                    },
                  },
                }
              );
            }
            if (image.profile_url) {
              await Page.findOneAndUpdate(
                { owner: session?.user?.email },
                {
                  $set: {
                    profile_image: {
                      url: image?.profile_url,
                      public_id: image?.profile_public_id,
                    },
                  },
                }
              );
            }
          });
        }

        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  } else {
    return false;
  }
};

export const saveSocialMediaOptionsToDB = async (formData: object) => {
  console.log(formData);
  const session = await getServerSession(authOptions);
  if (session) {
    const optionValues = {};
    for (let key in formData) {
      if (Object.keys(formData).length) {
        optionValues[key] = formData[key];
      }
    }
    if (Object.keys(optionValues).length !== 0)
      await Page.findOneAndUpdate(
        { owner: session?.user?.email },
        { socialMedia_Links: optionValues }
      );
    return true;
  }
  return false;
};

export const saveLinks = async (res: any) => {
  console.log(res);
  const session = await getServerSession(authOptions);
  if (session) {
    await Page.findOneAndUpdate(
      { owner: session?.user?.email },
      { links: res }
    );
    return true;
  }
  return false;
};
