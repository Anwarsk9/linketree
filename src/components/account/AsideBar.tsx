import Image from "next/image";
import AccountSidebarBtns from "@/components/buttons/AccountSidebarBtns";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faLink } from "@fortawesome/free-solid-svg-icons";
const AsideBar = ({ imgSrc, name }: { imgSrc: any; name: string }) => {
  return (
    <>
      <label htmlFor="nav">
        <FontAwesomeIcon icon={faCircleXmark} className="relative left-32 bottom-8  h-6 hover:cursor-pointer" />
      </label>
      <div className="flex flex-col gap-4 items-center mb-8">
        <Image
          src={imgSrc}
          width={64}
          height={64}
          alt="profile image"
          className="rounded-full"
        />
        <Link href={`/${name}`} target="_blank">
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
