import React from "react";
import Image from "next/image";
import { trustedBy } from "@/constants";
import { overlays } from "@/constants/images.constants";

const TrustedBy = () => {
 
  return (
    <section className="mt-[72px]">
      <h2 className="text-center text-lg tracking-tight  mb-[20px] md:mb-[30px] ">
        Trusted by top <span className="text-primary">Crypto Platforms</span>
      </h2>
      <div className="flex justify-center gap-4 lg:gap-6 xl:gap-8 flex-wrap relative">
        <Image src={overlays.shadow} alt="shadow" className="absolute inset-0 w-full h-full"/>
        {
            trustedBy.map((item, idx)=> (
                <Image src={item} alt="trusted-by" key={idx} width={187} height={32} className="w-20 lg:w-24 xl:w-28"/>
            ))
        }
      </div>
    </section>
  );
};

export default TrustedBy;
