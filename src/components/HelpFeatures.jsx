import React from 'react'

const HelpFeatures = () => {
  return (
    <section className='xl:min-h-fit h-full  mt-8 md:mt-10'>
        <div>
            <h2  className='xl:ml-52 md:ml-10 ml-6 lg:pt-20 md:pt-14 pt-4 md:text-[26px] text-xl tracking-tighter leading-8 font-semibold'>Helpful features.<br/> Just in case.</h2>
        </div>
        <div className='xl:ml-52 md:ml-6 overflow-x-scroll scroll-smooth md:mt-6 mt-4 md:flex md:flex-row lg:gap-16 flex flex-col'>
            <div className='px-4'>
                <img className='md:max-w-2xl w-full rounded-3xl' src="/img/help_img1.jpg" alt="" />
                <p className='py-4 pl-6 md:pl-3 md:max-w-[400px] w-full text-[#6E6E73] md:text-[14px] md:font-semibold'><span className='text-black'>eSIM</span>. A built-in eSIM provides seamless connectivity, flexibility, convenience and better security — perfect for travel.</p>
            </div>
            <div className='px-4'>
                <img className='md:max-w-2xl w-full rounded-3xl' src="/img/help_img2.jpg" alt="" />
                <p className='py-4 pl-6 md:pl-3 md:max-w-[400px] w-full text-[#6E6E73] md:text-[14px] md:font-semibold'><span className='text-black'>Crash Detection</span>. Hardware sensors and advanced motion algorithms can detect a severe car crash and call for help if you can’t.</p>
            </div>
        </div>
    </section>
  )
}

export default HelpFeatures