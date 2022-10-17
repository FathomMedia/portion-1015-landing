import Image from "next/image";
// import logo from "../assets/logo.svg";
import logo from "../assets/logo-dark.svg";
const Nav = () => {
  return (
    <div className="flex w-full m-0 px-16 justify-between items-center h-20 text-secondary font-medium text-sm">
      <div className="w-[7vw]">
        <Image src={logo} layout="responsive" />
      </div>
      <div className="flex items-center">
        <a>About</a>
        <a className="px-6">Contact Us</a>
        <a className="px-6 py-2 rounded-full bg-primary">Download App</a>
      </div>
    </div>
  );
};

export default Nav;
