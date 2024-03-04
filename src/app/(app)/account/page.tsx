import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/navigation";
import { Page } from "@/models/Page";
import GrabUsername from "@/components/buttons/GrabUsername";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import AddSocialMediaLinksForm from "@/components/forms/AddSocialMediaLinksFrom";
import AddPublicLinks from "@/components/forms/AddPublicLinks";

interface Request {
  params: object;
  searchParams: { username: string };
}

const Account = async (req: Request) => {
  const { username } = req.searchParams;
  //@ts-ignore
  const isLoggedIn = await getServerSession(authOptions);
  if (!isLoggedIn) {
    return redirect("/");
  }
  const { user } = isLoggedIn;
  const isGrabedUserName = await Page.findOne({ owner: user?.email })
    .populate("bg_image")
    .populate("profile_image");

  if (isGrabedUserName) {
    const leanPage = isGrabedUserName.toJSON();
    leanPage._id = leanPage._id.toString();
    return (
      <div>
        <PageSettingsForm page={leanPage} session={isLoggedIn} />
        <AddSocialMediaLinksForm
          socialMedia_Links={leanPage.socialMedia_Links}
        />
        <AddPublicLinks links={leanPage?.links} />
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
