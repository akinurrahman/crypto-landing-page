import React from 'react'
import Header from '@/components/landing-page/header'
import HeroSection from '@/components/landing-page/hero-section'
import TrustedBy from '@/components/landing-page/trusted-by'
import FeaturedCryptoCoins from '@/components/landing-page/featured-coins'

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto md:py-10 py-5 md:px-10 px-5 mb-[200px]">
      <h1 className="sr-only">Best Crypto Trading Platform</h1>
      <Header />
      <HeroSection />
      <TrustedBy />
      <FeaturedCryptoCoins />
    </div>
  );
}

export default page
