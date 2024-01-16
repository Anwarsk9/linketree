import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Page } from "@/models/Page";
import GrabUsername from "@/components/buttons/GrabUsername";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import AddSocialMediaLinksFrom from "@/components/forms/AddSocialMediaLinksFrom";

interface Request {
  params: object;
  searchParams: { username: string };
}

const Account = async (req: Request) => {
  const { username } = req.searchParams;
  const isLoggedIn = await getServerSession(authOptions);
  if (!isLoggedIn) {
    return redirect("/");
  }
  const { user } = isLoggedIn;
  const isGrabedUserName = await Page.findOne({ owner: user?.email })
    .populate("bg_image")
    .populate("profile_image");
  if (isGrabedUserName) {
    return (
      <div>
        <PageSettingsForm page={isGrabedUserName} session={isLoggedIn} />
        <AddSocialMediaLinksFrom />
      </div>
    );
  } else {
    return (
      <>
        <GrabUsername user={username ? username : user?.name} />
      </>
    );
  }
};

export default Account;
