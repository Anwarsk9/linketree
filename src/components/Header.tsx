import Link from "next/link";

const Header = () => {
  return (
    <header className=" py-4 bg-white border-b-4">
      <div className="flex justify-between max-w-4xl px-4 mx-auto ">
        <div className="flex gap-6">
          <Link href={"/"}>LinkList</Link>
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
        <nav className="flex gap-2 text-sm text-slate-500">
          <Link href={"/login"} className="hover:text-black">
            SignIn
          </Link>
          <Link href={"/register"} className="hover:text-black">
            Create Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
