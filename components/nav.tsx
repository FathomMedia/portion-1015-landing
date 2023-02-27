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
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-24 px-16 text-sm font-medium text-white bg-secondary">
      <Link href="/">
        <button type="button" title="home">
          <Logo />
        </button>
      </Link>
      <div className="z-50 flex justify-end md:hidden">
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
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-center align-middle">
          <Link href="/">
            <button type="button" title="menu" onClick={toggleMenu}>
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
          <div className="absolute z-50 space-y-4 bottom-4">
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
      <div className="items-center hidden space-x-8 md:flex">
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
