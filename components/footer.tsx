import Image from "next/image";
import Link from "next/link";
import BtnPrim from "./primaryBtn";

const Footer = () => {
  return (
    <div className="relative h-48 bg-secondary text-white justify-center overflow-hidden">
      <div className="absolute -right-56 md:-right-16 top-24">
        {" "}
        <Image
          src="/assets/portion-icon-outline.svg"
          width={400}
          height={400}
          alt="logo-bg"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center">
          <a href="https://www.instagram.com/portion_app/">
            <BtnPrim content="Follow us on Instagram" />
          </a>
        </div>
        <br />
        <div className="space-x-2 md:flex justify-center items-center hidden ">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <p> | </p>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
        <div className="absolute bottom-4 flex items-center mt-5">
          <p>Copyright © 2022 Portion.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
