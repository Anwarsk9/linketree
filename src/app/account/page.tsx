import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Account = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  const { user } = session;
  return <div>Account {user ? user?.name : " "}</div>;
};

export default Account;
