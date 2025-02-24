import { images } from '@/constants/images.constants';
import Image from 'next/image';
import React from 'react'

const BeTheFirstUser = () => {
  return (
    <section>
      <h3 className="text-lg tracking-tight text-center">
        Always by<span className="text-primary"> your side</span>
      </h3>
      <h2 className="heading-primary text-center my-1 md:my-2 ">
        Be the first to use Crypgo!
      </h2>
      <p className="text-white/60 text-sm md:text-base text-center md:w-[70%] lg:w-1/2  mx-auto mb-5 xl:mb-10">
        Get faster, safer, more affordable cloud object storage with <br className='hidden lg:block'/> no centeral
        point of failure.
      </p>
      <Image src={images.graph} alt="graph" width={1208} height={280}  />
    </section>
  );
}

export default BeTheFirstUser;
