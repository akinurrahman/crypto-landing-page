import React from "react";
import Image from "next/image";
import { icons } from "@/constants/images.constants";
import { navLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <section>
      <div className="space-y-5 md:space-x-0 pb-5 lg:flex">
        <div className="lg:w-1/2">
          <Image
            src={icons.logo}
            alt="logo"
            width={135}
            height={32}
            className=""
          />
          <p className="text-white/60 text-sm my-4">
            Transform your crypto business with Crypgo{" "}
            <br className="hidden lg:block" /> Framer, a template for startups
            and blockchain services.
          </p>
          <div className="flex gap-5">
            <div className="bg-white/5 size-12 rounded-full flex items-center justify-center">
              <Image
                src={icons.instagram}
                alt="instagram"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white/5 size-12 rounded-full flex items-center justify-center">
              <Image src={icons.twitter} alt="twitter" width={20} height={20} />
            </div>
            <div className="bg-white/5 size-12 rounded-full flex items-center justify-center">
              <Image
                src={icons.facebook}
                alt="facebook"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-lg tracking-tight mb-4">Links</h2>
          <ul className="space-y-2 text-white/60 tracking-tight">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-lg tracking-tight mb-4">
            Other Pages
          </h2>
          <ul className="space-y-2 text-white/60 tracking-tight">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-lg tracking-tight mb-4">
            Download App
          </h2>
          <div className="flex gap-2 lg:flex-col">
            <Image
              src={icons.googlePlay}
              alt="google play"
              width={129}
              height={48}
            />
            <Image
              src={icons.appStore}
              alt="app store"
              width={129}
              height={48}
            />
          </div>
        </div>
      </div>
      <p className="pt-5 border-t-2 text-sm text-white/40 tracking-tight text-center">
        Copyright @{new Date().getFullYear()} Crypgo. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
