import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/navigation";
import AsideBar from "@/components/account/AsideBar";
import { Page } from "@/models/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha Links",
  description:
    "Share your links, social profiles, contact info and more on one page.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //@ts-ignore
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }
  const isGrabedUserName = await Page.findOne({ owner: session?.user?.email })
    .populate("bg_image")
    .populate("profile_image")
    .lean();
  return isGrabedUserName ? (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <label
          htmlFor="nav"
          className="mt-2 ml-2 md:hidden absolute z-20 sm:mt-8 sm:ml-7 bg-white w-fit hover:cursor-pointer p-3 rounded"
        >
          <FontAwesomeIcon icon={faBars} className="w-5" />
          <span className="ml-1 hover:cursor-pointer">Open navigation</span>
        </label>
        <input className="hidden" type="checkbox" id="nav" />
        <nav
          className="flex absolute md:left-0 -left-80 transition-all"
          id="nav-bar"
        >
          <>
            <label
              htmlFor="nav"
              className="hidden backdrop fixed inset-0 bg-black/80 z-10"
            ></label>
            <aside className="bg-white relative z-50 min-h-screen w-60 p-4 shadow-2xl">
              <div className="sticky top-0 p-8">
                <AsideBar
                  imgSrc={session?.user?.image}
                  //@ts-ignore
                  name={isGrabedUserName?.uri}
                />
              </div>
            </aside>
          </>
          <div className="hidden md:block w-full sm:ml-0 sm:!relative sm:h-full sm:p-6">
            {children}
          </div>
        </nav>
        <div className="block md:hidden">{children}</div>
      </body>
    </html>
  ) : (
    <html>
      <body>
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
