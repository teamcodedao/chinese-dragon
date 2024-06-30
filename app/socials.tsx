export default function Socials() {
  return (
    <div className='pt-5 flex gap-x-4 sm:*:multi-[w-[90px];px-2;py-2] *:multi-[aspect-square;w-[65px];px-1;py-1;rounded-2xl;bg-white;flex;items-center;justify-center;transition] [&>a:hover]:bg-secondary [&_img]:multi-[size-full]'>
      <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
        <img src='/x.svg' alt='' />
      </a>
      <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
        <img src='/tele.svg' alt='' className='scale-150' />
      </a>
      <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
        <img src='/dex.svg' alt='' />
      </a>
      <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
        <img src='/dexs.svg' alt='' className='scale-150' />
      </a>
    </div>
  );
}
