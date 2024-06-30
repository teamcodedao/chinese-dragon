export default function HowToBuy() {
  return (
    <div className='px-5 mt-10'>
      <div className='relative'>
        <img
          src='/gift-1.gif'
          alt=''
          className='scale-x-[-1] w-[314px] object-contain absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block'
        />
        <h2 className='text-5xl sm:text-6xl md:text-[64px] text-center'>
          How To Buy
        </h2>
        <img
          src='/gift-2.gif'
          alt=''
          className='scale-x-[-1] absolute -right-24 xl:-right-0 top-1/2 -translate-y-1/2 hidden lg:block'
        />
      </div>
      <div className='mt-10 relative z-10 grid text-[20px] grid-cols-[repeat(auto-fit,minmax(min(100%,450px),1fr))] gap-x-10 gap-y-10 *:multi-[bg-[#FEF2E6];rounded-2xl;px-8;py-6] [&_h4]:multi-[text-[#FF2A18];text-2xl;flex;gap-x-4] [&_img]:mt-[-20px]'>
        <div>
          <h4>
            Download Tonkeeper <img src='/icon-1.svg' alt='' />
          </h4>
          <p>
            Download Tonkeeper (or compatible) and follow the steps to set it
            up. don't ever share your secret seed, we will never ask you for it,
            ever!
          </p>
        </div>

        <div>
          <h4>
            Get Some TON <img src='/icon-2.svg' alt='' />
          </h4>
          <p>
            Buy as many TON as you need, you can buy directly from a CEX,
            transfer from another wallet, or bridge from Rocketx.
          </p>
        </div>

        <div>
          <h4>
            Go to Dedust <img src='/icon-3.svg' alt='' />
          </h4>
          <p>
            Once you have enough TON, connect to dedust and check that you have
            the correct address.
          </p>
        </div>

        <div>
          <h4>
            Swap TON for $Dragon{' '}
            <img src='/icon-4.svg' alt='' className='!mt-[-50px]' />
          </h4>
          <p>
            Swap your TON for $Dragon.We have zero taxes so you don't need to
            worry about buying with a specific slippage, although you may need
            to use slippage during times of market volatility.
          </p>
        </div>
      </div>
    </div>
  );
}
