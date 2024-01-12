"use server";

import { Page } from "@/models/Page";

const AccountFormData = async (formData: any) => {
  const username: string = formData.get("username");
  if (username.length >= 4) {
    try {
      let searchName = await Page.findOne({ uri: username });
      if (!searchName) {
        let saveName = await Page.create({ uri: username });
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
