import React from 'react'
import Button from '../ui/button';
import Image from 'next/image';
import { icons, images } from '@/constants/images.constants';

const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row mt-[72px] lg:gap-10'>
      <div className='md:w-1/2'>
        <h2 className='font-medium tracking-tight text-primary text-sm md:text-base bg-white/10 rounded-full px-4 py-1 inline-block'>Future of Crypto trading</h2>
        <p className='flex flex-col font-medium text-3xl sm:text-4xl lg:text-6xl xl:text-7xl leading-[40px]  tracking-tight mt-[18px] mb-[12px]'>
          <span>Fast and Secure</span>
          <span>Cryptocurrency</span>
          <span>Exchange</span>
        </p>
        <p className='text-white/80 text-sm md:text-base mb-[40px] '>
          Trade cryptocurrencies with ease, security, and advanced features on
          our cutting-edge platform.
        </p>
        <Button className="mb-10 md:mb-0">
          Explore More
          <span aria-hidden="true">
            <Image src={icons.arrowRight} alt="" width={24} height={24} />
          </span>
        </Button>
      </div>
      <div className='md:w-1/2'>
        <Image src={images.heroImage} alt="hero image" width={584} height={582}/>
      </div>
    </section>
  );
}

export default HeroSection
