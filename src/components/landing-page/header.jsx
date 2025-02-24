"use client";

import { useState } from "react";
import Button from "../ui/button";
import Image from "next/image";
import { icons } from "@/constants/images.constants";
import { navLinks } from "@/constants";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative flex items-center justify-between">
      <Image
        src={icons.logo}
        alt="logo"
        width={135}
        height={32}
        className="cursor-pointer"
      />
      <div className="md:hidden ">
        <Image
          src={isMenuOpen ? icons.closeIcon : icons.menuIcon}
          alt={isMenuOpen ? "close menu" : "open menu"}
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0   bg-primary/10 backdrop-blur-lg
 rounded-md md:bg-transparent mt-4 md:mt-0 p-4 md:p-0 shadow-md md:shadow-none items-start md:items-center gap-y-4 md:gap-y-0 md:gap-x-10 w-full md:w-auto `}
      >
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="text-sm font-medium tracking-tight hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="md:hidden w-full">
          <Button className="w-full">Get Template</Button>
        </li>
      </ul>
      <Button className="hidden lg:block">Get Template</Button>
    </section>
  );
};

export default Header;
