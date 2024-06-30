export default function Tokenomics() {
  return (
    <div className='px-5 mt-16'>
      <h2 className='text-5xl sm:text-6xl md:text-[64px] text-center'>
        Tokenomics
      </h2>
      <div className='bg-[#D9D9D950] rounded-3xl px-5 pt-3 pb-5 mt-10 gap-x-10 gap-y-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,310px),1fr))] *:multi-[text-[40px];flex;flex-col;items-center;justify-center] [&_img]:max-h-[189px] [&_h4]:text-white'>
        <div>
          <img src='/gift-3.gif' alt='' />
          <h4>Total Supply</h4>
          <p>1.000.000.000</p>
        </div>
        <div>
          <img src='/gift-4.gif' alt='' />
          <h4>Liquidity</h4>
          <p>Burned</p>
        </div>
        <div>
          <img src='/gift-3.gif' alt='' />
          <h4>Taxes</h4>
          <p>0/0</p>
        </div>
        <div>
          <img src='/gift-3.gif' alt='' />
          <h4>Contract</h4>
          <p>Renounced</p>
        </div>
      </div>
    </div>
  );
}
