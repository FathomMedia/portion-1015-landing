import logo from "../public/assets/logo.svg";
import icon from "../public/assets/portion-icon.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <div className="hidden md:block md:w-[12vw] lg:w-[10vw] max-w-[150px]">
        <Image src={logo} layout="responsive" alt="logo" />
      </div>
      <div className="w-[8vw] py-2 md:w-[8vw] block md:hidden">
        <Image src={icon} layout="responsive" alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
