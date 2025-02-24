import { cryptoUpgrade } from "@/constants";
import { icons, images } from "@/constants/images.constants";
import Image from "next/image";
import React from "react";

const CryptoUpgrade = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2">
        <h2 className="text-lg tracking-tight">
          Crypto <span className="text-primary">upgrade</span>
        </h2>
        <h2 className="heading-primary">Upgrade your crypto business</h2>
        <p className="text-white/60">
          Get faster, safer, more affordable cloud object storage with no
          centeral point of failure.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {cryptoUpgrade.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Image src={icons.tickMark} alt="tick" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 lg:-mt-24">
        <Image
          src={images.chartImage}
          alt="chart"
          width={587}
          height={517}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default CryptoUpgrade;
