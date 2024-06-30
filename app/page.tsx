import Image from 'next/image';

import Header from './header';
import Socials from './socials';
import HowToBuy from './how-to-buy';

import dragonFullImg from './dragon-full.svg';
import cloudImg from './cloud.svg';

export default function Home() {
  return (
    <main className='min-h-screen max-w-screen-2xl mx-auto overflow-hidden'>
      <Header />

      <div className='relative'>
        <Image
          src={dragonFullImg}
          alt=''
          className='w-full object-contain object-top -mt-[50px] lg:-mt-[110px] xl:-mt-[220px]'
        />
        <div className='absolute inset-0 px-5 pt-14 sm:pt-24'>
          <div className='max-w-[min(100%,600px)] space-y-5'>
            <Image src={cloudImg} alt='' className='mx-auto hidden md:block' />
            <hgroup className='uppercase space-y-5'>
              <h1 className='text-secondary text-6xl sm:text-7xl lg:text-8xl xl:text-9xl'>
                Chinese
              </h1>
              <p className='text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl relative inline-block'>
                <span>Dragon</span>
                <img
                  src='/ton.svg'
                  alt=''
                  className='h-full absolute -right-24 xl:-right-28 top-1/2 -translate-y-1/2 object-cover'
                />
              </p>
            </hgroup>
            <Socials />
          </div>
        </div>
      </div>

      <HowToBuy />
    </main>
  );
}
