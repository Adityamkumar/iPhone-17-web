import React from 'react'
import { iosSliderData } from '../constant'

const IosSlider = () => {
  return (
    <section className="max-w-full sm:max-h-[75vh] lg:max-h-[55vh] xl:max-h-screen md:mt-16 mt-6">
          <h3 className="xl:ml-52 md:ml-10 ml-6 md:pt-16 md:text-[26px] text-xl tracking-tighter font-semibold">
            iOS 26. New look.<br/> Even more magic.
          </h3>
          <div className="max-w-full md:min-h-[80vh] sm:min-h-[60vh] md:mt-9 mt-6 overflow-x-auto scroll-smooth">
            <div className="flex md:gap-8 gap-2  xl:ml-48 md:ml-8 ml-6">
              {iosSliderData.map(({id,img,text}) => (
                <div key={id} className="flex flex-col items-start">
                   <img className="md:max-w-[300px] max-w-[200px]  rounded-3xl" src={img} alt="image" />
                   <span className="py-3 pl-4 md:max-w-[440px] max-w-[250px] text-[#6E6E73] text-[15px] md:font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default IosSlider