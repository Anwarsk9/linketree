import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AccountBtn from "@/components/buttons/AccountBtn";

interface Request {
  params: object;
  searchParams: { username: string };
}

const Account = async (req: Request) => {
  const { username } = req.searchParams;
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  const { user } = session;
  return (
    <>
      
      <AccountBtn user={username ? username : user?.name} />
    </>
  );
};

export default Account;
