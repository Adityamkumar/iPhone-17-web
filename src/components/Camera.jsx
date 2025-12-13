import React from 'react'

const Camera = () => {
  return (
    <section className='overflow-x-hidden min-h-screen w-full  mt-16'>
        <p className=' text-center font-semibold text-3xl py-10'>Cameras.</p>
        <div className='text-center font-bold md:text-7xl text-2xl  md:w-[810px] m-auto'>
            <p className='camera-text'>18MP Center Stage front camera. It’s a total frame changer.</p>
        </div>
        <p className='text-center text-xl text-[#7d7d7d] font-semibold md:w-[850px] md:mt-6 mt-4 m-auto'>The new front camera gives you flexible ways to frame your photos and videos — and so much more. Tap to expand the field of view and rotate from portrait to landscape <span className='text-black'>without moving your iPhone</span>. And when friends join the shot, the field of view expands so you get more friendsies in your selfies.</p>
        <div className='md:w-4xl  md:m-auto px-4 md:mt-12 mt-6'>
            <img className='mix-blend-darken' src='/img/selfi_img.jpg'/>
        </div>
    </section>
  )
}

export default Camera