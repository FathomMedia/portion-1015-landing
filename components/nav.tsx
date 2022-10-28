import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import menuOpen from "../public/assets/menu-open.svg";
import menuClose from "../public/assets/menu-close.svg";

import BtnPrim from "./primaryBtn";
import Logo from "./Logo";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div className="fixed flex w-full top-0 px-16 justify-between items-center h-24 z-50 text-white font-medium text-sm bg-secondary">
      <Link href="/">
        <button>
          <Logo />
        </button>
      </Link>
      <div className="md:hidden flex justify-end z-50">
        <button onClick={toggleMenu}>
          {showMenu ? (
            <Image src={menuClose} alt="menu-close" width={40} height={40} />
          ) : (
            <Image src={menuOpen} alt="menu-open" width={40} height={40} />
          )}
        </button>
      </div>
      <div
        className={
          showMenu
            ? "fixed m-0 top-0 right-0 left-0 bottom-0 w-full h-screen z-40 bg-secondary/95 flex flex-col"
            : "hidden"
        }
      >
        <div className="flex flex-col text-center space-y-6 justify-center align-middle h-full items-center">
          <Link href="/">
            <button onClick={toggleMenu}>
              <Logo />
            </button>
          </Link>
          <Link href="/#features">
            <p onClick={toggleMenu} className="text-2xl">
              Features
            </p>
          </Link>
          <Link href="/#gallery">
            <p onClick={toggleMenu} className="text-2xl">
              Gallery
            </p>
          </Link>
          <a href="https://www.instagram.com/portion_app/">
            <BtnPrim content="Subscribe" />
          </a>
          <div className="absolute bottom-4 space-y-4 z-50">
            <Link href="/privacy-policy">
              <p onClick={toggleMenu} className="text-xl">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-and-conditions">
              <p onClick={toggleMenu} className="text-xl">
                Terms & Conditions
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex items-center space-x-8 hidden">
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
