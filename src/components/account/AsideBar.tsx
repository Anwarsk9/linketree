import Image from "next/image";
import AccountSidebarBtns from "@/components/buttons/AccountSidebarBtns";

const AsideBar = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <>
      <div className="flex justify-center mb-8">
        <Image
          src={imgSrc}
          width={64}
          height={64}
          alt="profile image"
          className="rounded-full"
        />
      </div>
      <AccountSidebarBtns />
    </>
  );
};

export default AsideBar;
