import { whyCrypgo } from '@/constants';
import { images } from '@/constants/images.constants';
import Image from 'next/image';
import React from 'react'

const WhyCrypgo = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className='md:w-1/2'>
        <h2 className=" text-lg tracking-tight">
          Why <span className="text-primary">choose crypgo</span>
        </h2>
        <h2 className="heading-primary  mb-[20px] md:mb-[30px] lg:mb-[40px]">
          Features of the crypto framer mobile application
        </h2>
        <div className='mt-[20px] md:mt-[30px] lg:mt-[40px] grid grid-cols-1 gap-4 lg:grid-cols-2 '>
            {
                whyCrypgo.map((item, idx)=> (
                    <div key={idx} className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full size-[40px] bg-white/10'><Image src={item.icon} alt={item.title} width={20} height={20} /></div>
                        <h3 className='font-medium leading-[140%] '>{item.title}</h3>
                    </div>
                ))
            }
        </div>
      </div>
      <div className='md:w-1/2 mt-5 md:mt-0'>
        <Image src={images.whyCrypgoHeroImage} alt="why-crypgo-hero-image" width={588} height={410} />
      </div>
    </section>
  );
}

export default WhyCrypgo
