import { featuredCoins } from '@/constants'
import Image from 'next/image'
import React from 'react'

const FeaturedCoinCard = ({title, name, icon, price}) => {
    return (
        <div className='border p-[20px] rounded-2xl bg-white/5'>
            <h3 className='text-white/60 mb-[10px] md:mb-[16px]'>{title}</h3>
            <Image src={icon} alt={name} width={32} height={32} />
            <h2 className='font-semibold tracking-tight mt-4'>{name}</h2>
            <h3 className='text-sm mt-1 leading-[120%]'>{price} <span className='text-white/60'>USD</span></h3>
        </div>
    )
}

const FeaturedCryptoCoins = () => {
  return (
    <section className='my-[72px]'>
      <h2 className="text-center text-lg tracking-tight">
        Featured <span className="text-primary">Crypto Coins</span>
      </h2>
      <h2 className='heading-primary text-center mb-[20px] md:mb-[30px] lg:mb-[40px]'>
        Top crypto coins updates
      </h2>

      <div className='grid grid-cols-2 gap-4 md:gap-6  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
        {
            featuredCoins.map((item, idx)=> (
                <FeaturedCoinCard key={idx} {...item} />
            ))
        }
      </div>
    </section>
  )
}

export default FeaturedCryptoCoins
