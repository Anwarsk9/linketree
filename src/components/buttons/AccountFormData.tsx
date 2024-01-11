"use server";
import { Page } from "@/models/Page";

const AccountFormData = async (formdata: HTMLFormElement) => {
  let username = formdata.get("username");
  let nameError;
  try {
    const pageName = await new Page({ uri: username });
    username = await pageName.save();
    console.log(username);
  } catch (err) {
    nameError = err?.message;
  }
  console.log(username, nameError);
};

export default AccountFormData;
