"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";

const AccountFormData = async (formData: any) => {
  const username: string = formData.get("username");
  console.log(username);
  if (username.length >= 4) {
    try {
      let searchName = await Page.findOne({ uri: username });
      if (!searchName) {
        let session = await getServerSession(authOptions);
        let saveName = await Page.create({
          uri: username,
          owner: session?.user?.email,
        });
        console.log(saveName);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default AccountFormData;
