import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AccountBtn from "@/components/buttons/AccountBtn";

interface Req {
  params: object;
  searchParams: { username: string };
}

const Account = async (req: Req) => {
  const { username } = req.searchParams;
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  const { user } = session;
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mb-4">
          Grab your username
        </h1>
        <p className="text-gray-500 text-center mb-10">Choose your username</p>
      </div>
      <AccountBtn user={username ? username : user?.name} />
    </>
  );
};

export default Account;
