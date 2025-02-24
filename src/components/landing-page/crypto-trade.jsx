import React from "react";
import Button from "../ui/button";
import { overlays } from "@/constants/images.constants";
import Image from "next/image";

const CryptoTrade = () => {
  return (
    <section className="relative p-5 md:p-10 rounded-lg overflow-hidden lg:p-[64px] bg-white/5 border flex flex-col md:flex-row justify-between md:items-center gap-4">
      <Image
        src={overlays.overlay2}
        alt="overlay-2"
        className="absolute right-0  "
      />
      <div>
        <h2 className="heading-primary ">Trade Crypto Safely and Easily</h2>
        <p className="text-white/60 text-sm md:w-[70%]">
          Experience seamless and secure crypto trading with our reliable
          platform, designed for everyone.
        </p>
      </div>
      <Button>Start Trading</Button>
    </section>
  );
};

export default CryptoTrade;
