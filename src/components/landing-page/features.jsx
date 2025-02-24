import React from "react";
import Image from "next/image";
import { images } from "@/constants/images.constants";
import { features } from "@/constants";

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image
          src={images.featuresHeroImage}
          alt="features-hero"
          width={588}
          height={500}
          className="w-full h-full object-cover lg:-mt-10 xl:-mt-16"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-lg tracking-tight ">
          Manage your <span className="text-primary">Crypto investments</span>
        </h2>
        <h2 className="heading-primary my-2">
          Create your cryptocurrency portfolio today
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-[40px]">
          Coinbase has a variety of features that make it the best place to
          start trading.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 border-b-2 pb-5">
              <div className="flex items-center justify-center rounded-full size-[40px] bg-white/10">
                <Image src={item.icon} alt={item.text} width={20} height={20} />
              </div>
              <p className="text-lg font-medium tracking-tight">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
