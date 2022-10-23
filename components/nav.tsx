import Image from "next/image";
import Link from "next/link";
import icon from "../assets/portion-icon.svg";
// import logo from "../assets/logo.svg";
import logo from "../assets/logo-dark.svg";
import BtnPrim from "./primaryBtn";
const Nav = () => {
  return (
    <div className="flex w-full m-0 px-16 justify-between items-center h-20 text-secondary font-medium text-sm">
      <div className="hidden md:block md:w-[10vw] lg:w-[8vw]">
        <Image src={logo} layout="responsive" alt="logo" />
      </div>
      <div className="w-[7vw] block md:hidden">
        <Image src={icon} layout="responsive" alt="logo" />
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/#features">Features</Link>
        <Link href="/#gallery">Gallery</Link>
        <a href="https://www.instagram.com/portion_app/">
          <BtnPrim content="Subscribe" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
