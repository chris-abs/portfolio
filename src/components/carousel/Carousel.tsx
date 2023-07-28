import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className="carousel relative flex justify-center items-center w-6/6 md:w-5/6 lg:w-auto h-auto lg:h-[580px]">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="arrow absolute w-8 h-8 text-white hover:pointer left-4"
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={`shadow rounded-lg h-full w-full
              ${slide === idx ? '' : 'hidden'}
            `}
          />
        )
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow absolute w-8 h-8 text-white hover:pointer right-4"
      />
      <span className="flex absolute bottom-4">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={`bg-white h-2 w-2 rounded cursor-pointer
                ${slide === idx ? 'indicator' : 'indicator indicator-inactive'}
              `}
              onClick={() => setSlide(idx)}
            ></button>
          )
        })}
      </span>
    </div>
  )
}

export default Carousel
