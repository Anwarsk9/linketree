import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import Lagout from "@/components/buttons/SignOut";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import CollapsNavBar from "./account/CollapsNavBar";

const Header = async () => {
  //@ts-ignore
  const session = await getServerSession(authOptions);
  return (
    <header className="relative z-50 py-4 bg-white border-b-4">
      <label
        htmlFor="bar"
        className="hover:cursor-pointer sm:hidden inline-flex items-center justify-center rounded ml-4 bg-white relative z-30"
      >
        <FontAwesomeIcon icon={faBars} className="w-5 mr-2" />
        <span>Menu</span>
      </label>
      <input className="hidden" type="checkbox" id="bar" />

      <div className="fixed menu inset-0 bg-white">
        <CollapsNavBar session={session} />
      </div>

      <div className="!bg-white hidden sm:flex justify-between max-w-4xl px-8 mx-auto ">
        <div className="flex gap-6 items-center">
          <Link href={"/"} className="text-lg text-blue-600">
            <div className="flex items-center font-extrabold gap-2">
              <FontAwesomeIcon icon={faLink} className="text-blue-600" />
              <span>LinkTree</span>
            </div>
          </Link>
          <nav className="flex gap-4 text-gray-500 text-sm">
            <Link href={"/about"} className="hover:text-black">
              About
            </Link>
            <Link href={"/pricing"} className="hover:text-black">
              Pricing
            </Link>
            <Link
              href={"/contact"}
              className="hidden sm:block hover:text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          {!session ? (
            <>
              <Link href={"/login"} className="hover:text-black">
                SignIn
              </Link>
              <Link
                href={"/register"}
                className="hidden sm:block hover:text-black"
              >
                Create Account
              </Link>
            </>
          ) : (
            <>
              <Link href={"/account"} className="flex justify-center items-center gap-2 mr-4 hover:text-black">
                <FontAwesomeIcon icon={faCircleUser} className="h-5 !text-black" />
                My Profile
              </Link>
              <Lagout />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
