import React from 'react'

const Accessories = () => {
  return (
    <section className='md:min-h-[52vh] h-full md:mt-10 mt-8'>
        <h3 className='access tracking-tighter md:pt-14 lg:ml-56 md:ml-10 ml-5 md:text-6xl text-2xl font-semibold md:font-bold'>Snap it on. Show it off.</h3>
        <div className='lg:ml-56 md:ml-6 overflow-x-scroll scroll-smooth  md:mt-6 mt-5 md:flex md:flex-row md:gap-1 gap-4  flex flex-col'>
            <div>
                <img className='mix-blend-multiply md:max-w-2xl w-full px-4 md:max-h-[450px] max-h-[380px] rounded-4xl' src="/img/acc_img1.jpg" alt="" />
                <p className='text-[#6E6E73] px-4 md:max-w-[340px] pt-2 md:text-[14px]'><span className='text-black'>Get carried away</span>. Pair the new Crossbody Strap with Apple Silicone Cases and wear your iPhone everywhere you go, hands-free.</p>
            </div>
            <div>
                <img className='mix-blend-multiply md:max-w-2xl w-full px-4 md:max-h-[450px] max-h-[380px] rounded-4xl' src="/img/acc_img2.jpg" alt="" />
                <p className='text-[#6E6E73] px-4 md:max-w-[340px] pt-2 md:text-[14px]'><span className='text-black'>Deck it out</span>. Protect your iPhone by snapping on a Silicone Case with MagSafe in a beautiful colour.</p>
            </div>
            <div>
                <img className='mix-blend-multiply md:max-w-2xl w-full px-4 md:max-h-[450px] max-h-[380px] rounded-4xl' src="/img/acc_img3.jpg" alt="" />
                <p className='text-[#6E6E73] px-4 md:max-w-[330px] pt-2 md:text-[14px]'><span className='text-black'>Show your true colours</span>. Pop on a Clear Case with MagSafe and let the gorgeous colour of your iPhone shine through.</p>
            </div>
        </div>
    </section>
  )
}

export default Accessories