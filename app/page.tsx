import Image from 'next/image';

import Header from './header';

export default function Home() {
  return (
    <main className='min-h-screen max-w-screen-2xl mx-auto px-5'>
      <Header />
    </main>
  );
}
