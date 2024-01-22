import Image from "next/image";
import AccountSidebarBtns from "@/components/buttons/AccountSidebarBtns";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const AsideBar = ({ imgSrc, name }: { imgSrc: string; name: string }) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center mb-8">
        <Image
          src={imgSrc}
          width={64}
          height={64}
          alt="profile image"
          className="rounded-full"
        />
        <Link href={`/${name}`} target="_main">
          <div className="flex items-center gap-1 text-blue-600">
            <FontAwesomeIcon icon={faLink} className="h-5" />
            <span>/{name}</span>
          </div>
        </Link>
      </div>
      <AccountSidebarBtns />
    </>
  );
};

export default AsideBar;
