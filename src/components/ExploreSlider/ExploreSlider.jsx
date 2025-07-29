import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import Button from '../Button'
import './ExploreSlider.css'
import { Link, useNavigate } from 'react-router-dom'

const ExploreSlider = ({ data }) => {
  const { projects } = data
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()
  
  // Map project titles to their respective routes
  const projectRoutes = {
    'Rajpath Enclave': '/projects/rajpath-enclave',
    'Rajpath Grand': '/projects/rajpath-grand',
    'Green City': '/projects/green-city'
  }
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 20 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 1.5, spacing: 36 },
      },
    },
    mode: 'snap', // snap mode ensures clean slide snapping
    rubberband: false, // prevents dragging beyond first/last
    loop: false, // don't loop for now; fix clean slide access
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })  

  // For pagination click
  const goToSlide = (idx) => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(idx)
    }
  }

  return (
    <div className="w-full  lg:pr-0 py-10 px-[6.5rem] explore-slider">
      {/* Keen Slider component replaces Swiper */}
      <div ref={sliderRef} className="keen-slider swiper-fix">
        {projects.map((item, idx) => (
          <div
            key={item.id}
            className={`keen-slider__slide${
              idx === 0
                ? ' mob:pl-5 sm:pl-10 lg:pl-10'
                : idx === projects.length - 1
                ? ' mob:pr-5 sm:pr-10 lg:pr-10'
                : ''
            } `}
          >
            <div 
              className="rounded-lg overflow-hidden relative group aspect-square sm:aspect-auto sm:h-[406px] lg:h-[498px] w-full mob:h-[472px] shadow-lg cursor-pointer"
              onClick={() => {
                const route = Object.entries(projectRoutes).find(([key]) => 
                  key.toLowerCase() === item.title.toLowerCase()
                )?.[1] || '/projects';
                navigate(route);
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b lg:from-black/10 lg:to-black/50 sm:from-black/30 sm:to-black/30 mob:from-black/40 mob:to-black/40" />
              <p className="absolute lg:top-[2.5rem] lg:left-[2.5rem] sm:top-[1.5rem] sm:left-[1.5rem] mob:top-[20px] mob:left-[20px] text-white text-[1.5rem] leading-[1.75rem] tracking-[-0.02em] font-medium font-[Inter] mob:text-[1.2rem] mob:leading-[1.4rem]">
                {item.category}
              </p>
              <div className="absolute bottom-0 left-0 right-0 lg:p-[2.5rem] sm:p-[1.5rem] text-white flex flex-col lg:gap-[0.75rem] sm:gap-[0.25rem] mob:p-[20px] mob:gap-[0.5rem] mob:text-[20px] mob:leading-[32px] mob:font-[Onest] mob:font-normal">
                <h3 className="lg:text-[2rem] lg:leading-[2.5rem] lg:tracking-[0.01em] sm:text-[1.5rem] sm:leading-[2rem] sm:tracking-[0.01em] capitalize font-[Onest] font-semibold text-[#F7F7F7] sm:font-archivo sm:font-medium sm:text-[24px] sm:leading-[28px] sm:tracking-[0.02em] sm:align-middle">
                  {item.title}
                </h3>
                <p className="text-[0.875rem] sm:text-[1rem] leading-[1.5rem] font-normal font-[Onest] text-white sm:w-[80%]">
                  {item.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-[0.75rem] mt-2 mob:flex-row mob:gap-[0.5rem] mob:mt-1 lg:w-fit">
                <Button
                  variant="dark"
                  className="shadow-md lg:min-w-[180px] sm:flex-1 lg:flex-0 large-btn-flex mob:flex-1 border border-white !rounded-[0.6px]"
                  style={{ borderWidth: '0.5px' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const route = Object.entries(projectRoutes).find(([key]) => 
                      key.toLowerCase() === item.title.toLowerCase()
                    )?.[1] || '/projects';
                    navigate(route);
                  }}
                >
                  Explore More
                </Button>
                  <Button
                    variant="light"
                    className="shadow-md lg:min-w-[180px] sm:flex-1 lg:flex-0 large-btn-flex mob:flex-1"
                  >
                    <a href="#contact">Contact us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Pagination - Logic is updated to control the Keen Slider instance */}
      <div className="custom-pagination mt-6 sm:mt-8 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-black' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default ExploreSlider
