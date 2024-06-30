export default function Footer() {
  return (
    <footer className='px-5 mt-16 mb-10'>
      <h2 className='uppercase text-4xl sm:text-5xl md:text-[55px] text-center'>
        TELEGRAM TWEETED
      </h2>
      <div className='mt-10 flex items-center justify-between gap-x-10'>
        <img
          src='/gift-6.gif'
          alt=''
          className='scale-x-[-1] shrink hidden md:block'
        />
        <div className='rounded-3xl flex-[1_0_300px] overflow-hidden shadow-black shadow-2xl'>
          <video loop muted autoPlay playsInline preload='none'>
            <source src='/video-1.mp4' type='video/mp4' />
          </video>
        </div>
        <img src='/gift-6.gif' alt='' className='shrink hidden lg:block' />
      </div>
    </footer>
  );
}
