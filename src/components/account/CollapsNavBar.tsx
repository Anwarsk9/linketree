"use client";
import Link from "next/link";
import Lagout from "@/components/buttons/SignOut";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const CollapsNavBar = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const isNotPath = "text-lg font-extrabold text-blue-600";
  const isPath = "text-gray-500  hover:text-black";
  return (
    <>
      <div className="h-full w-full -mt-24 flex flex-col justify-center items-center gap-1">
        {!session ? (
          <div className="w-full mb-6 flex justify-around">
            <Link
              href={"/login"}
              className={(pathname === "/login" ? isNotPath : isPath) + " pl-14"}
            >
              SignIn
            </Link>
            <Link
              href={"/register"}
              className={pathname === "/register" ? isNotPath : isPath}
            >
              Create Account
            </Link>
          </div>
        ) : (
          <div className="w-full mb-6 flex justify-around">
            <Link
              href={"/account"}
              className={
                (pathname === "/account" ? isNotPath : isPath) +
                " flex justify-center items-center gap-1 ml-5"
              }
            >
              <FontAwesomeIcon
                icon={faCircleUser}
                className="h-5 !text-black"
              />
              My Profile
            </Link>
            <div>
              <Lagout />
            </div>
          </div>
        )}
        <Link href={"/"} className={pathname === "/" ? isNotPath : isPath}>
          <div className="flex items-center gap-2">
            <span>Home</span>
          </div>
        </Link>
        <Link
          href={"/about"}
          className={pathname === "/about" ? isNotPath : isPath}
        >
          About
        </Link>
        <Link
          href={"/pricing"}
          className={pathname === "/pricing" ? isNotPath : isPath}
        >
          Pricing
        </Link>
        <Link
          href={"/contact"}
          className={pathname === "/contact" ? isNotPath : isPath}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default CollapsNavBar;
