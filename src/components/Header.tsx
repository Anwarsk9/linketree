import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import Lagout from "@/components/buttons/SignOut";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className=" py-4 bg-white border-b-4">
      <div className="flex justify-between max-w-4xl px-8 mx-auto ">
        <div className="flex gap-6 items-center">
          <Link href={"/"}  className="text-lg text-blue-600" >
            <div className="flex items-center font-extrabold gap-2">
              <FontAwesomeIcon icon={faLink}/>
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
            <Link href={"/contact"} className="hover:text-black">
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
              <Link href={"/register"} className="hover:text-black">
                Create Account
              </Link>
            </>
          ) : (
            <>
              <Link href={"/account"} className="hover:text-black">
                Hello, {session?.user?.name}
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
