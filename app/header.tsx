import Image from 'next/image';

import logo from './logo.svg';
import lampshade from './lampshade.svg';

export default function Header() {
  return (
    <header className='flex gap-10 justify-between items-start overflow-hidden px-5 relative z-20'>
      <Image
        src={logo}
        priority
        alt=''
        className='w-[130px] xl:w-auto mt-5 sm:mt-10'
      />
      <Image
        src={lampshade}
        alt=''
        className='object-cover min-h-[160px] sm:min-h-[200px]'
      />
    </header>
  );
}
