import Image from "next/image";
import Link from "next/link";
import icon from "../assets/portion-icon.svg";
// import logo from "../assets/logo.svg";
import logo from "../assets/logo-dark.svg";
import BtnPrim from "./primaryBtn";
const Nav = () => {
  return (
    <div className="flex w-full m-0 px-16 justify-between items-center h-20 text-secondary dark:text-white font-medium text-sm">
      <div className="hidden md:block md:w-[12vw] lg:w-[10vw] max-w-[150px]">
        <Image src={logo} layout="responsive" alt="logo" />
      </div>
      <div className="w-[8vw] py-2 md:w-[8vw] block md:hidden">
        <Image src={icon} layout="responsive" alt="logo" />
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/#features">Features</Link>
        <Link href="/#gallery">Gallery</Link>
        <div className="hidden md:block">
          <a href="https://www.instagram.com/portion_app/">
            <BtnPrim content="Subscribe" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
