"use server";

import { Page } from "@/models/Page";

const AccountFormData = async (formData: any) => {
  const username = formData.get("username");
  if (username) {
    try {
      let searchName = await Page.findOne({ uri: username });
      if (!searchName) {
        let saveName = await Page.create({ uri: username });
        console.log(saveName);
        return saveName?.uri;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default AccountFormData;
