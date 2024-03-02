"use server";

import { authOptions } from "@/libs/auth";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";

const AccountFormData = async (uri: string) => {
  if (uri.length >= 4) {
    try {
      let searchName = await Page.findOne({ uri });
      if (!searchName) {
        //@ts-ignore
        let session = await getServerSession(authOptions);
        await Page.create({
          uri,
          owner: session?.user?.email,
        });
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
