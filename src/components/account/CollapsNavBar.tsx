"use client";
import Link from "next/link";
import Lagout from "@/components/buttons/SignOut";
import { usePathname } from "next/navigation";

const CollapsNavBar = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const isNotPath = "text-lg font-extrabold text-blue-600";
  const isPath = "text-gray-500  hover:text-black";
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-1">
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
      {!session ? (
        <>
          <Link
            href={"/login"}
            className={pathname === "/login" ? isNotPath : isPath}
          >
            SignIn
          </Link>
          <Link
            href={"/register"}
            className={pathname === "/register" ? isNotPath : isPath}
          >
            Create Account
          </Link>
        </>
      ) : (
        <>
          <Link
            href={"/account"}
            className={pathname === "/account" ? isNotPath : isPath}
          >
            My Profile
          </Link>
          <div className="mt-6">
            <Lagout />
          </div>
        </>
      )}
    </div>
  );
};

export default CollapsNavBar;
