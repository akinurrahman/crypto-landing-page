import { images } from "@/constants/images.constants";
import Image from "next/image";
import React from "react";

const WhatWeOffer = () => {
  return (
    <section>
      <h2 className="text-center text-lg tracking-tight  mb-[20px] md:mb-[30px] ">
        We deliver <span className="text-primary">best solution</span>
      </h2>
      <h2 className="heading-primary text-center mb-[20px] md:mb-[30px] lg:mb-[40px] md:w-4/5 mx-auto ">
        One application with multiple options to give you freedom of buying &
        selling
      </h2>
      <Image
        src={images.whatWeOfferHeroImage}
        alt="what-we-offer-hero"
        className="w-full h-full object-cover"
        width={1200}
        height={840}
      />
    </section>
  );
};

export default WhatWeOffer;
