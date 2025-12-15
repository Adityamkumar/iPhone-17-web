import React from 'react'
import { appleSlideData } from '../constant'

const AppleSlide = () => {
  return (
    <section className="md:min-h-[65vh] h-full max-w-full md:mt-12 mt-6">
          <h3 className="md:ml-52 ml-6 md:pt-20 md:text-[26px] text-xl tracking-tighter font-semibold">
            Apple Intelligence.<br/>Effortlessly helpful every day.
          </h3>
          <div className="max-w-full md:min-h-[80vh] sm:min-h-[60vh] md:mt-7 mt-6 overflow-x-auto scroll-smooth">
            <div className="flex md:gap-8 gap-6  md:ml-48 ml-6">
              {appleSlideData.map(({id,img,text}) => (
                <div key={id} className="flex flex-col items-start">
                   <img className="md:max-w-2xl max-w-[330px] md:h-[300px] h-[250px] rounded-3xl" src={img} alt="image" />
                   <span className="py-3 pl-2 md:max-w-[440px] max-w-[200px] text-[#6E6E73] text-[14px] md:font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default AppleSlide