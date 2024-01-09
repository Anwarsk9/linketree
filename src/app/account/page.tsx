import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Account = async () => {
  //@ts-ignore
  const { user } = await getServerSession(authOptions);
  return <div>Account {user ? user?.name : " "}</div>;
};

export default Account;
