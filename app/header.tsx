import Image from 'next/image';

import logo from './logo.svg';
import lampshade from './lampshade.svg';

export default function Header() {
  return (
    <header className='flex gap-10 justify-between'>
      <Image src={logo} priority alt='' className='w-[130px] xl:w-auto' />
      <Image src={lampshade} alt='' className='object-cover min-h-[200px]' />
    </header>
  );
}
