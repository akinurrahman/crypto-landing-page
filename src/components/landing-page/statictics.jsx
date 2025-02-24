import { statistics } from "@/constants";
import React from "react";

const Statistics = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {statistics.map((item, idx) => (
        <div
          key={idx}
          className="border leading-[120%] tracking-tight py-[47px] rounded-md bg-white/5"
        >
          <h2 className="text-primary font-medium text-[32px] text-center">
            {item.value}
          </h2>
          <h2 className="text-white/80 text-nowrap mt-3 text-center">
            {item.title}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default Statistics;
